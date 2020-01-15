const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://jslucassf:jslucassf@cluster0-zrs6w.mongodb.net/week10?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(express.json());

app.get('/', (request, response) => {
	return response.json({"message": "Hello World"});
})

app.listen(3333);
