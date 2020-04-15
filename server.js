var express = require('express');
const mongoose = require('mongoose');

var app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI',{ useUnifiedTopology: true,useNewUrlParser: true  } );
const bookRouter = express.Router();
var port = process.env.PORT || 3000;
const Book = require('./models/bookModels');

bookRouter.route('/books')
    .get((req, res) => {
        Book.find((err, books) => {
            if (err) {
                return res.send(err);
            } else {
               return res.json(books);
            }
        });
        // const response = { hello: 'This is my API' };
        // res.json(response);
    });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});//everytime get a GET request to /  we'll response with a function

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
