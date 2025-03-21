"use client"

import { useState, useEffect } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

import { connectWebSocket, closeWebSocket, isMessagePending, sendSocketMessage } from "@/app/_lib/websocket";
import { Input } from "./input";
import { Response } from "./response";
import { Avatar } from "./avatar";

export function Chat() {
    const [receivedMessage, setReceivedMessage] = useState<string | null>(null);
    const [pending, setPending] = useState(isMessagePending());

    const parse = async (message: string) => {
        const parsedMarkdownText: string | Promise<string> = marked.parse(message);
        let response: string;
        if (parsedMarkdownText instanceof Promise)
            response = await parsedMarkdownText.then(DOMPurify.sanitize);
        else
            response = DOMPurify.sanitize(parsedMarkdownText);
        setReceivedMessage(response);
    }

    const start = () => {
        connectWebSocket(parse);
        sendSocketMessage("Ciao");
    }

    const stop = () => {
        closeWebSocket();
        setReceivedMessage(null);
    }

    const reset = () => {
        stop();
        start();
    }

    useEffect(() => {
        marked.use({ async: true });
        start();

        const intervalId = setInterval(() => {
            setPending(isMessagePending());
        }, 500);
        return () => {
            closeWebSocket();
            clearInterval(intervalId);
        }
    }, []);

    return (
        <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col items-center justify-center gap-8">
                <Avatar/>
                <Response message={receivedMessage} pending={pending}/>
            </div>
            <div>
                <Input pending={pending}/>
                {receivedMessage && <p onClick={reset} className="mt-4 text-center text-slate-300 hover:text-slate-600 duration-300 cursor-pointer">Ricomincia la conversazione</p>}
            </div>
        </div>
    );
}