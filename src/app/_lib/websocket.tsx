const WS_URL = process.env.CHAT_WEBSOCKET_URL as string;
const WS_KEEP_ALIVE_INTERVAL = Number(process.env.CHAT_WEBSOCKET_KEEP_ALIVE_INTERVAL);

let keepAliveTask: NodeJS.Timeout | null = null;
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

            if (keepAliveTask) {
                clearInterval(keepAliveTask);
                keepAliveTask = null;
            }
            if (WS_KEEP_ALIVE_INTERVAL > 0)
                keepAliveTask = setInterval(() => {
                    if (socket?.readyState === WebSocket.OPEN)
                    socket.send("PING_REQUEST");
                }, WS_KEEP_ALIVE_INTERVAL);
        };

        socket.onmessage = (event) => {
            const message = event.data;
            console.info(`Nuovo messaggio ricevuto dal server "${message}"...`);
            pending = null;
            onMessage(message);
        };

        socket.onerror = (error) => {
            console.warn("Errore WebSocket:", error);
        };

        socket.onclose = (event) => {
            console.info(`WebSocket chiuso. Codice: ${event.code}`);
            setTimeout(() => connectWebSocket(onMessage), 1000);
        };
    }
}
export function closeWebSocket() {
    if (!socket) {
        console.error("Impossibile chiudere il WebSocket poiché non è definito.");
        return;
    }
    switch (socket.readyState) {
        case WebSocket.CLOSED:
            console.error("Impossibile chiudere il WebSocket già chiuso.");
            break;
        case WebSocket.CLOSING:
            console.warn("WebSocket già in fase di chiusura.");
            break;
        default:
            socket.close(1000, "Chiusura tramite chat.");
            socket = null;
            console.info("WebSocket chiuso con successo.");
            break;
    }
    if (keepAliveTask)
        clearInterval(keepAliveTask);
    if (pending)
        pending = null;
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