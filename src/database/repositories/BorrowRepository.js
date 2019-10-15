const BaseRepository = require('./BaseRepository');
const Borrow = require('../../models/Borrow');

class BorrowRepository extends BaseRepository {
  constructor() {
    super('borrow');
  }

  findByUserId(userId){
    return this.models.filter({'userId': userId}).value();
  }

  findByBookId(bookId){
    return this.models.filter({'bookId': bookId}).value();
  }
}

module.exports = BorrowRepository;