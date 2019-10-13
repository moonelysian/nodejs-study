const BorrowRepository = require('../database/repositories/BorrowRepository');
const Borrow = require('../models/Borrow');

const moment = require('moment');

class BorrowService{
    constructor(){
        this.borrowRepository = new BorrowRepository();
    }

    create(userId, bookId){
        const borrow = Borrow.newInstance(userId, bookId);
        this.borrowRepository.create(borrow.toJson());
        return borrow;
    }

    find(){
        const borrowList = this.borrowRepository.find();
        return borrowList.map(borrowList => Borrow.formData(borrowList));
    }

    findById(id){
        const borrow = Borrow.formData(this.borrowRepository.findById(id));
        return borrow;
    }

    findByUserId(userId){
        const borrowList = Borrow.formData(this.borrowRepository.findByUserId(userId));
        return borrowList;
    }

    findByBookId(bookId){
        const borrowList = Borrow.formData(this.borrowRepository.findBookId(bookId));
        return borrowList;
    }

    update(id){
        const borrow = Borrow.formData(this.borrowRepository.findById(id));

        borrow.start = moment().format('YYYY-MM-DD');
        borrow.end = moment().add(7 , 'days').format('YYYY-MM-DD');

        this.borrowRepository.update(id, borrow.toJson());
    }

    delete(id){
        this.borrowRepository.delete(id);
    }
}

module.exports = BorrowService;