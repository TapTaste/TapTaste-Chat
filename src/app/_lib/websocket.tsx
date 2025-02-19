const WS_URL = process.env.CHAT_WEBSOCKET_URL as string;

let socket: WebSocket | null = null;

export function connectWebSocket(onMessage: (msg: string) => void) {
    if (!socket || socket.readyState === WebSocket.CLOSED) {
        socket = new WebSocket(WS_URL);
        
        socket.onopen = () => {
            console.log("Connesso al WebSocket");
        };

        socket.onmessage = (event) => {
            onMessage(event.data);
        };

        socket.onerror = (error) => {
            console.error("Errore WebSocket:", error);
        };

        socket.onclose = () => {
            console.log("WebSocket chiuso. Riconnessione in corso...");
            setTimeout(() => connectWebSocket(onMessage), 1000);
        };
    }
}

export function sendSocketMessage(message: string) {
    if (socket && socket.readyState === WebSocket.OPEN)
        socket.send(message);
    else
        console.error("WebSocket non connesso.");
}
