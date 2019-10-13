const BorrowService = require('../services/BookService');
const moment = require('moment');

const createBorrow = function(req, res){
    const borrowService = new BorrowService();
    const body = req.body;
    const borrow = borrowService.create(body.userId, body.bookId);

    res.send({
        data: borrow.toJson(),
    });
}

const getBorrowList = function(req, res){
    const borrowService = new BorrowService();
    const borrows = borrowService.find();

    res.send({
        data: borrows,
    });
}

const getBorrow = function(){
    
}

const getListByUserID = function(){

}

const getListByBookID = function(){

}

const updateDue = function(req, res){
    const borrowService = new BorrowService();
    const data = {
        end: moment().add(7 , 'days').format('YYYY-MM-DD') 
    }
    const borrow = borrowService.update(req.params.borrow, data);

    res.send({
        data: borrow,
    });
}

const deleteBorrow = function(req, res){
    const borrowService = new BorrowService();
    borrowService.delete(req.params.borrow);
    res.send({
        data: 'success'
    });
}

module.exports = {
    createBorrow,
    getBorrow,
    getBorrowList,
    getListByBookID,
    getListByUserID,
    updateDue,
    deleteBorrow,
}