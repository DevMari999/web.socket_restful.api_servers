require('dotenv').config();

const express = require('express');
const http = require('http');
const path = require('path');
const userRoutes = require('./routes/user.routes');
const {apiErrorHandler} = require('./middlewares/errorHandlers');
const {initializeWebSocketServer} = require('./services/websocketService');
const loggerMiddleware = require('./middlewares/logger');
const app = express();
const server = http.createServer(app);
const mongoose = require('mongoose');
const configs = require("./configs/mongo.configs");
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use(loggerMiddleware);

initializeWebSocketServer(server);

app.use('/api', userRoutes);

app.use(express.static(path.join(__dirname, '..', 'app')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'app', 'index.html'));
});

app.use(apiErrorHandler);

const PORT = process.env.PORT || 3000;

mongoose.connect(configs.DB_URL, {
    useNewUrlParser: true, useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB.');

        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
        process.exit(1);
    });
