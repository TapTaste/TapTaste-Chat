"use client"

import { useState, useEffect } from "react";
import { connectWebSocket, isMessagePending, sendSocketMessage } from "@/app/_lib/websocket";
import { Input } from "./input";
import { Response } from "./response";

export function Chat() {
    const [receivedMessage, setReceivedMessage] = useState("...");
    const [pending, setPending] = useState(isMessagePending());

    useEffect(() => {
        connectWebSocket(setReceivedMessage);

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