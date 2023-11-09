const WebSocket = require('ws');

const initializeWebSocketServer = server => {
    const wss = new WebSocket.Server({server});

    wss.on('connection', ws => {
        console.log('WebSocket client connected');

        ws.on('message', message => {
            console.log(`Received message: ${message}`);

            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            });
        });
    });

    return wss;
};

module.exports = {
    initializeWebSocketServer,
};
