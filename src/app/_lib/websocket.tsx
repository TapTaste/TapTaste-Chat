const WS_URL = process.env.CHAT_WEBSOCKET_URL as string;

let socket: WebSocket | null = null;
let pending: string | null = null;

export function connectWebSocket(onMessage: (msg: string) => void) {
    if (!socket || socket.readyState === WebSocket.CLOSED) {
        console.info(`Tentativo di connessione al WebSocket ${WS_URL} in corso...`)
        socket = new WebSocket(WS_URL);
        
        socket.onopen = () => {
            console.info("Connessione al WebSocket riuscita.");
            if (pending) {
                console.info(`Invio del messaggio in pending "${pending}"...`);
                socket?.send(pending);
            }
        };

        socket.onmessage = (event) => {
            const message = event.data;
            console.info(`Nuovo messaggio ricevuto dal server "${message}"...`);
            pending = null;
            onMessage(message);
        };

        socket.onerror = (error) => {
            console.error("Errore WebSocket:", error);
        };

        socket.onclose = () => {
            console.info("WebSocket chiuso. Riconnessione in corso...");
            setTimeout(() => connectWebSocket(onMessage), 1000);
        };
    }
}

export function sendSocketMessage(message: string) {
    if (pending) {
        console.warn(`Messaggio in attesa di invio: "${pending}".`);
        return;
    }
    pending = message;
    if (socket && socket.readyState === WebSocket.OPEN)
        socket.send(message);
    else
        console.error("WebSocket non connesso.");
}

export function isMessagePending(): boolean {
    return pending !== null;
}
