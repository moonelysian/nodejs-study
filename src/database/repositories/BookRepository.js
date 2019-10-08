const BaseRepository = require('./BaseRepository');
const Book = require('../../models/Book');

class BookRepository extends BaseRepository {
  constructor() {
    super('books');
  }
}

module.exports = BookRepository;