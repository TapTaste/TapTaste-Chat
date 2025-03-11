"use client"

import { useState, useEffect } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

import { connectWebSocket, isMessagePending, sendSocketMessage } from "@/app/_lib/websocket";
import { Input } from "./input";
import { Response } from "./response";

export function Chat() {
    const [receivedMessage, setReceivedMessage] = useState("...");
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

    useEffect(() => {
        marked.use({ async: true });
        connectWebSocket(parse);

        const intervalId = setInterval(() => {
            setPending(isMessagePending());
        }, 500);

        sendSocketMessage("Ciao");
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <Response message={receivedMessage} pending={pending}/>
            <Input pending={pending}/>
        </>
    );
}