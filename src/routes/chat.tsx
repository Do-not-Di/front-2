import { Form, FormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMessage } from '@/hooks/use-message';
import { useRef, useState } from 'react';

const schema = z.object({
  message: z.string().min(1),
});

const ChatPage = () => {
  const messageRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<{ userName: string; message: string }[]>([]);
  const { sendMessage } = useMessage({
    userId: 'user',
    onMessage: (userName, message) => {
      setMessages(prev => [...prev, { userName, message }]);
      setTimeout(() => {
        messageRef.current?.scrollTo({
          top: messageRef.current?.scrollHeight,
          behavior: 'smooth',
        });
      });
    },
  });

  const form = useForm({
    defaultValues: {
      message: '',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    sendMessage(data.message);
    setMessages(prev => [...prev, { userName: 'me', message: data.message }]);
    form.reset();
    setTimeout(() => {
      messageRef.current?.scrollTo({
        top: messageRef.current?.scrollHeight,
        behavior: 'smooth',
      });
    });
  };

  return (
    <div className="flex flex-col h-dvh">
      <svg width="375" height="44" viewBox="0 0 375 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>채팅 헤더</title>
        <rect width="375" height="44" fill="white" />
        <path
          opacity="0.35"
          d="M335.667 16.8359H352.333C353.53 16.8359 354.5 17.8063 354.5 19.0029V25.0029C354.5 26.1994 353.53 27.1689 352.333 27.1689H335.667C334.47 27.1689 333.5 26.1994 333.5 25.0029V19.0029L333.511 18.7812C333.622 17.6886 334.545 16.8359 335.667 16.8359Z"
          stroke="#111111"
        />
        <path
          opacity="0.4"
          d="M356 20.0039V24.0039C356.805 23.6651 357.328 22.877 357.328 22.0039C357.328 21.1308 356.805 20.3427 356 20.0039Z"
          fill="#111111"
        />
        <path
          d="M335 19.4359C335 18.8284 335.492 18.3359 336.1 18.3359H351.9C352.508 18.3359 353 18.8284 353 19.4359V24.5693C353 25.1768 352.508 25.6693 351.9 25.6693H336.1C335.492 25.6693 335 25.1768 335 24.5693V19.4359Z"
          fill="#111111"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M320.332 18.6094C322.548 18.6095 324.679 19.4609 326.285 20.9877C326.406 21.1056 326.599 21.1041 326.718 20.9844L327.874 19.8177C327.935 19.757 327.968 19.6747 327.968 19.5891C327.967 19.5036 327.933 19.4217 327.872 19.3617C323.656 15.3221 317.007 15.3221 312.792 19.3617C312.731 19.4217 312.696 19.5035 312.695 19.5891C312.695 19.6746 312.728 19.7569 312.789 19.8177L313.945 20.9844C314.064 21.1043 314.257 21.1057 314.378 20.9877C315.984 19.4608 318.116 18.6094 320.332 18.6094ZM320.332 22.405C321.549 22.405 322.723 22.8575 323.626 23.6747C323.748 23.7907 323.94 23.7882 324.059 23.669L325.214 22.5024C325.275 22.4412 325.308 22.3581 325.308 22.2719C325.307 22.1856 325.271 22.1033 325.209 22.0434C322.461 19.487 318.205 19.487 315.457 22.0434C315.395 22.1033 315.359 22.1857 315.359 22.272C315.358 22.3582 315.392 22.4413 315.453 22.5024L316.607 23.669C316.726 23.7882 316.918 23.7907 317.04 23.6747C317.942 22.858 319.115 22.4055 320.332 22.405ZM322.645 24.9588C322.647 25.0454 322.613 25.1288 322.551 25.1894L320.554 27.205C320.495 27.2643 320.415 27.2976 320.332 27.2976C320.249 27.2976 320.169 27.2643 320.11 27.205L318.113 25.1894C318.051 25.1287 318.017 25.0453 318.019 24.9588C318.021 24.8723 318.058 24.7903 318.122 24.7324C319.398 23.6535 321.266 23.6535 322.542 24.7324C322.606 24.7904 322.643 24.8723 322.645 24.9588Z"
          fill="#111111"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M306.668 16.668H305.668C305.116 16.668 304.668 17.1157 304.668 17.668V26.3346C304.668 26.8869 305.116 27.3346 305.668 27.3346H306.668C307.22 27.3346 307.668 26.8869 307.668 26.3346V17.668C307.668 17.1157 307.22 16.668 306.668 16.668ZM301.001 19.0013H302.001C302.554 19.0013 303.001 19.449 303.001 20.0013V26.3346C303.001 26.8869 302.554 27.3346 302.001 27.3346H301.001C300.449 27.3346 300.001 26.8869 300.001 26.3346V20.0013C300.001 19.449 300.449 19.0013 301.001 19.0013ZM297.335 21.3346H296.335C295.782 21.3346 295.335 21.7824 295.335 22.3346V26.3346C295.335 26.8869 295.782 27.3346 296.335 27.3346H297.335C297.887 27.3346 298.335 26.8869 298.335 26.3346V22.3346C298.335 21.7824 297.887 21.3346 297.335 21.3346ZM292.668 23.3346H291.668C291.116 23.3346 290.668 23.7824 290.668 24.3346V26.3346C290.668 26.8869 291.116 27.3346 291.668 27.3346H292.668C293.22 27.3346 293.668 26.8869 293.668 26.3346V24.3346C293.668 23.7824 293.22 23.3346 292.668 23.3346Z"
          fill="#111111"
        />
        <path
          d="M34.5146 16.1675C32.2222 16.1675 30.5889 17.7349 30.5889 19.8809V19.8955C30.5889 21.9023 32.0098 23.3818 34.0386 23.3818C35.4888 23.3818 36.4116 22.6421 36.7998 21.8071H36.9463C36.9463 21.8877 36.939 21.9683 36.939 22.0488C36.8584 24.0703 36.1479 25.7109 34.4707 25.7109C33.5405 25.7109 32.8887 25.2275 32.6104 24.4878L32.5884 24.4146H30.728L30.7427 24.4951C31.0796 26.1138 32.5298 27.2637 34.4707 27.2637C37.1294 27.2637 38.7334 25.1543 38.7334 21.5947V21.5801C38.7334 17.7715 36.7705 16.1675 34.5146 16.1675ZM34.5073 21.9316C33.3062 21.9316 32.4346 21.0527 32.4346 19.8296V19.8149C32.4346 18.6357 33.3647 17.7056 34.5293 17.7056C35.7012 17.7056 36.6167 18.6504 36.6167 19.8589V19.8735C36.6167 21.0674 35.7012 21.9316 34.5073 21.9316ZM41.5586 20.1519C42.2324 20.1519 42.7231 19.6392 42.7231 18.9946C42.7231 18.3428 42.2324 17.8374 41.5586 17.8374C40.8921 17.8374 40.394 18.3428 40.394 18.9946C40.394 19.6392 40.8921 20.1519 41.5586 20.1519ZM41.5586 25.5864C42.2324 25.5864 42.7231 25.0811 42.7231 24.4292C42.7231 23.7773 42.2324 23.272 41.5586 23.272C40.8921 23.272 40.394 23.7773 40.394 24.4292C40.394 25.0811 40.8921 25.5864 41.5586 25.5864ZM49.5107 27H51.3198V24.9712H52.7407V23.4111H51.3198V16.4312H48.6465C47.2109 18.6138 45.7095 21.0454 44.3398 23.4258V24.9712H49.5107V27ZM46.0977 23.4551V23.3452C47.123 21.5508 48.3462 19.5952 49.4302 17.9399H49.54V23.4551H46.0977ZM56.6206 27H58.5103V16.4312H56.6279L53.8667 18.3721V20.1519L56.4961 18.2915H56.6206V27Z"
          fill="#111111"
        />
      </svg>

      <header className="h-14 flex items-center px-4">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.6673 23.3337L9.33398 14.0003L18.6673 4.66699"
            stroke="#111111"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h1 className="text-lg font-bold flex-1 text-center">CONTACT</h1>
      </header>
      <div className="sticky top-0 z-10 pt-3 pb-6  bg-white flex justify-center items-center">
        <div className="w-[335px] flex items-center gap-3 p-4 rounded-2xl border">
          <img src="/G1.webp" alt="박말자" className="w-12 h-12 rounded-full object-cover" />
          <div>
            <div className="font-semibold text-base">Mal-ja Park</div>
            <div className="text-[#767676] text-xs flex items-center gap-1">
              <span className="w-2 h-2 bg-[#4AA63C] rounded-full inline-block"></span>
              온라인
            </div>
          </div>
        </div>
      </div>

      <div ref={messageRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100 flex-[1]">
        {messages.map(({ userName, message }, index) => (
          <div
            key={index.toString()}
            className={`flex ${userName === 'me' ? 'justify-end flex gap-2' : 'justify-start'}`}>
            {/* TODO: 시간 추가해냐람 */}
            <span className="text-[#767676] font-sans text-[12px] font-normal leading-[18px] self-end ml-2">
              {new Date()
                .toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true,
                })
                .toLowerCase()}
            </span>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                userName === 'me' ? 'bg-[#7A4C1E] text-white' : 'bg-white text-[#505050]'
              }`}>
              {/* <div className='text-sm font-medium mb-1'>{userName}</div> */}
              <div>{message}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Form */}
      <div className="sticky bottom-0 bg-white border-t p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <Input {...field} className="flex-1 h-[52px]" placeholder="Please enter a message" />
              )}
            />
            <button
              type="submit"
              className="bg-[#7A4C1E] w-[73px] h-[52px] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              SEND
            </button>
          </form>
        </Form>
        {/* <div className='mt-2'>
          <MicRecorder
            onStartRecording={(starter) => {
              starter({
                lang: 'ko-KR',
                callback: (result) => {
                  console.log(result, '<<result');
                },
              });
            }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default ChatPage;
