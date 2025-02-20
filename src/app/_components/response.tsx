"use client"

import { useState, useEffect } from "react";
import { connectWebSocket } from "@/app/_lib/websocket";

export function Response() {
    const [receivedMessage, setReceivedMessage] = useState("Hello!");

    useEffect(() => {
        connectWebSocket(setReceivedMessage);
    }, []);

    return (
        <div className="relative inline-block bg-orange-300 shadow-lg shadow-orange-200 rounded-2xl px-8 py-4 text-2xl font-medium text-white">
            <p>{receivedMessage}</p>
            <div
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0
                border-l-8
                border-l-transparent
                border-r-8
                border-r-transparent
                border-b-8
                border-b-orange-300
                "
            />
        </div>
    );
}