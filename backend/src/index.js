const express = require('express');
const moongose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
moongose.connect('mongodb+srv://andeilson:330910Uk@cluster0.gcaek.mongodb.net/?retryWrites=true&w=majority');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);