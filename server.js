var express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parse');
var app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI', { useUnifiedTopology: true, useNewUrlParser: true });
// const bookRouter = express.Router();
var port = process.env.PORT || 3000;
const Book = require('./models/bookModels');
const bookRouter = require('./routes/bookRouter')();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});//everytime get a GET request to /  we'll response with a function

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
