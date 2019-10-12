const BaseRepository = require('./BaseRepository');
const Borrow = require('../../models/Borrow');

class BorrowRepository extends BaseRepository {
  constructor() {
    super('borrows');
  }
}

module.exports = BorrowRepository;