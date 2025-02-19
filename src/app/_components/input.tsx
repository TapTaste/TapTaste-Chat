"use client";

import { useState } from 'react';
import { sendSocketMessage } from "@/app/_lib/websocket";

export function Input() {
    const [message, setMessage] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        sendSocketMessage(message);
        setMessage("");
    };

    return (
        <form onSubmit={handleSubmit} className="relative mt-16">
            <input
                type="text"
                name="message"
                value={message}
                onChange={(e) => {setMessage(e.target.value)}}
                placeholder="Scrivi..."
                className="focus:outline-none shadow-[0_5px_15px_0px_rgba(0,0,0,0.1)] py-4 px-8 pr-16 rounded-full text-md"
            />
            <button
                type="submit"
                className="bg-[url(/send.webp)] bg-no-repeat bg-[length:50%] bg-center relative -left-12 -top-[6px] bg-slate-700 rounded-full w-10 h-10"
            />
        </form>
    );
}