# TapTaste Chat
Il modulo TapTaste Chat rappresenta l'interfaccia utente del progetto TapTaste AI. Attraverso una chat semplice ed intuitiva, gli utenti possono comunicare con la mascotte virtuale (l’assistente AI basato sul NLP di OpenAI) per ricevere suggerimenti sui piatti da ordinare.

## Avvio

Per iniziare, avvia il server di sviluppo eseguendo il comando:

```bash
npm run dev
```

Una volta avviato, apri [http://localhost:3000](http://localhost:3000) sul browser per visualizzare il risultato.
Assicurati che il WebSocket server (TapTaste Roboadvisor) sia attivo e configurato correttamente. Questo è fondamentale affinché i messaggi vengano inviati e ricevuti correttamente dal modello AI.
Se necessario, aggiorna l'URL del WebSocket nel file .env per puntare al server giusto.