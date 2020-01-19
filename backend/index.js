const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

console.log('pre');
setupWebSocket(server);

mongoose.connect('mongodb+srv://jslucassf:jslucassf@cluster0-zrs6w.mongodb.net/week10?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(express.json());

server.listen(3333);
