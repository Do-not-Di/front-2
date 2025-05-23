'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import useVoice from '@/hooks/use-voice';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';
const MicRecorder = ({ className, onStartRecording }) => {
    const { isRecording, recorder } = useVoice();
    return (_jsx("div", { className: cn('flex justify-center items-center', className), children: isRecording ? (_jsx("div", { children: "recording" })) : (_jsx("button", { type: "button", className: "w-full h-full", onClick: () => onStartRecording?.(recorder.start), children: _jsx(LucideIcons.Mic, {}) })) }));
};
export default MicRecorder;
