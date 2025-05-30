export class Recorder {
  private static instance: Recorder;
  private readonly SpeechRecognition: SpeechRecognition = new (
    window.webkitSpeechRecognition || window.SpeechRecognition
  )();

  private permission = false;
  private stream?: MediaStream;
  private track?: MediaStreamTrack;
  private recognitionHistory: string[] = [];
  private listners: ((state: boolean) => void)[] = [];

  public recordingState = false;

  public static getInstance() {
    if (typeof window === 'undefined') {
      throw new Error('서버 환경에서 사용할 수 없습니다.');
    }
    Recorder.instance = new Recorder();
    return Recorder.instance;
  }

  async requestPermission() {
    if (navigator.mediaDevices?.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia(
        // constraints - only audio needed for this app
        {
          audio: true,
        },
      );
      this.stream = stream;
      this.permission = true;
      this.track = this.stream.getAudioTracks()?.[0];
    } else {
      console.log('getUserMedia not supported on your browser!');
    }
  }

  addListner(stateListner: (state: boolean) => void) {
    this.listners.push(stateListner);
  }
  getListner() {
    return this.listners;
  }

  clearListner() {
    this.listners = [];
  }

  start = async (options: {
    callback: (result: string) => void;
    lang: string;
  }) => {
    if (this.recordingState) {
      return this.stop();
    }
    if (!this.permission || !this.track) {
      await this.requestPermission();
    }
    const { callback, lang } = options;
    this.SpeechRecognition.lang = lang ?? 'ko';
    this.SpeechRecognition.interimResults = false;
    this.SpeechRecognition.continuous = false;
    this.SpeechRecognition.maxAlternatives = 10;
    this.SpeechRecognition.start();
    this.recordingState = true;
    for (const listener of this.listners) {
      listener(this.recordingState);
    }
    this.SpeechRecognition.onresult = event => {
      const speechResult = event.results[0][0].transcript;
      callback(speechResult);
      this.recognitionHistory.push(speechResult);
    };
    this.SpeechRecognition.onaudiostart = () => {
      window.addEventListener('click', this.disableClick);
      console.log('SpeechRecognition.onaudiostart');
    };

    this.SpeechRecognition.onend = () => {
      console.log('SpeechRecognition.onend');
      this.stop();
    };

    this.SpeechRecognition.onnomatch = () => {
      console.log('SpeechRecognition.onnomatch');
    };

    this.SpeechRecognition.onspeechstart = () => {
      console.log('SpeechRecognition.onspeechstart');
    };
    this.SpeechRecognition.onstart = () => {
      console.log('SpeechRecognition.onstart');
    };
  };

  stop() {
    this.track?.stop();
    this.recordingState = false;
    window.removeEventListener('click', this.disableClick);
    for (const listener of this.listners) {
      listener(this.recordingState);
    }
  }

  getStream() {
    return this.stream;
  }

  getRecognitionHistory() {
    return this.recognitionHistory;
  }

  private disableClick = () => {
    this.SpeechRecognition.stop();
    this.stop();
  };
}
