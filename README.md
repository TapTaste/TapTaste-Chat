# TapTaste Chat
Il modulo TapTaste Chat rappresenta l'interfaccia utente del progetto TapTaste AI. Attraverso una chat semplice ed intuitiva, gli utenti possono comunicare con la mascotte virtuale (l’assistente AI basato sul NLP di OpenAI) per ricevere suggerimenti sui piatti da ordinare.

## Avvio

Per iniziare, installa le librerie con il seguente comando:

```bash
npm install
```

Successivamente, avvia il server di sviluppo eseguendo il comando:

```bash
npm run dev
```

Una volta avviato, apri [http://localhost:3000](http://localhost:3000) sul browser per visualizzare il risultato.

È possibile compilare il progetto ottenendo una pagina statica, pronta alla produzione ed ottimizzata, tramite il comando:

```bash
npm run build
```

Prima dell'utilizzo, assicurati che il WebSocket server (TapTaste Roboadvisor) sia attivo e configurato correttamente. Questo è fondamentale affinché i messaggi vengano inviati e ricevuti correttamente dal modello AI.
Se necessario, aggiorna l'URL del WebSocket nel file .env per puntare al server giusto.

## Docker

Puoi creare un'immagine Docker del progetto pronta all'uso per **TapTaste Playground** con il seguente comando:

```bash
docker build -t taptaste-chat .
```