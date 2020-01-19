const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const http = require('http');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://jslucassf:jslucassf@cluster0-zrs6w.mongodb.net/week10?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
