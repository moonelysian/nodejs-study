const BookRepository = require('../database/repositories/BookRepository');
const Book = require('../models/Book')

class BookService{
    constructor(){
        this.bookRepository = new BookRepository();
    }

    create(id, title, author, total){
        const book = Book.newInstance(id, title, author, total);
        this.bookRepository.create(book.toJson());
        return book;
    }

    find(){
        const books = this.bookRepository.find();
        return books.map(books => Book.fromData(books));
    }

    findById(id){
        const book = Book.fromData(this.bookRepository.findById(id));
        return book;
    }

    update(id, data){
        const book = Book.fromData(this.bookRepository.findById(id));
        
        book.total = data.total || book.total;
        
        this.bookRepository.update(id, book.toJson());
    }

    delete(id){
        this.bookRepository.delete(id);
    }

}

module.exports = BookService;