const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://jslucassf:jslucassf@cluster0-zrs6w.mongodb.net/week10?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
