import { useMemo } from "react";

interface ResponseProps {
    message: string | null;
    pending: boolean;
}

export const Response: React.FC<ResponseProps> = ({ message, pending }) => {
    const textSize = useMemo(() => {
        if (!message) return "";
        else if (message.length > 400) return "text-sm";
        else if (message.length > 200) return "text-base";
        else if (message.length > 100) return "text-xl";
        else return "text-lg";
    }, [message]);

    return (
        <div id="response" className={`relative inline-block bg-orange-300 shadow-lg shadow-orange-200 rounded-2xl px-8 py-4 text-2xl font-medium text-white ${textSize} ${pending ? "animate-bounce" : ""}`}>
            {!message || pending ? (
                <p className={`animate-pulse `}>...</p>
            ) : (
                <div id="response" dangerouslySetInnerHTML={{ __html: message }} />
            )}
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
};