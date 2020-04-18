const express = require('express');
function routes(){

bookRouter.route('/books')
const bookRouter = express.Router();
bookRouter.route('/books')
.post((req, res) => {
    const book = new Book(req.body);
    book.save();
    console.log(book);
    return res.status(201).json(book);
})
.get((req, res) => {
    const query = {};
    if (req.query.genre) {
        query.genre = req.query.genre;
    }
    Book.find(query, (err, books) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json(books);
        }
    });
    // Book.find((err, books) => {
    //     if (err) {
    //         return res.send(err);
    //     } else {
    //         return res.json(books);
    //     }
    // });
    // const response = { hello: 'This is my API' };
    // res.json(response);
});

bookRouter.route('/books/:bookId')
.get((req, res) => {

    Book.findById(req.params.bookId, (err, book) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json(book);
        }
    });
});
return Book
}
module.exports = routes;