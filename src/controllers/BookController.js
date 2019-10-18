const BookService = require('../services/BookService');

const createBook = function(req, res){
    const bookService = new BookService();
    const body = req.body;
    
    if(body.total == undefined){
        body.total = 3;
    }
    
    const book = bookService.create(body.title, body.author, body.total);
    res.send({
        data: book.toJson(),
    });
}

const getBooks = function(req, res){
    const bookService = new BookService();
    const books = bookService.find();
    res.send({
        data: books,
    })
}

const getBook = function(req, res){
    const bookService = new BookService();
    const book = bookService.findById(req.params.book);
    res.send({
        data: book,
    });
}

const updateBook = function(req, res){
    const bookService = new BookService();
    const body = req.body;
    const data = {
        total: body.total,
    };

    const book = bookService.update(req.params.book, data);
    res.send({
        data: book,
    });
}

const deleteBook = function(req, res){
    const bookService = new BookService();
    bookService.delete(req.params.book);
    res.send({
        data: 'success'
    });
}

module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
}