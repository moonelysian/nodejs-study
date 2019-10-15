const BorrowService = require('../services/BorrowService');
const moment = require('moment');

const createBorrow = function(req, res){
    const borrowService = new BorrowService();
    const body = req.body;
    const borrow = borrowService.create(body.userId, body.bookId);

    res.send({
        data: borrow.toJson(),
    });
}

//전체목록
const getBorrowList = function(req, res){
    const borrowService = new BorrowService();
    const borrow = borrowService.find();
    res.send({
        data: borrow,
    });
}

//borrow id로 찾기
const getBorrow = function(req, res){
    const borrowService = new BorrowService();
    const borrow = borrowService.findById(req.params.borrow);
    console.log(req.params.borrow);
    res.send({
        data: borrow,
    });
}

//user가 빌린 책 목록
const getListByUserID = function(req, res){
    const borrowService = new BorrowService();
    const borrowList = borrowService.findByUserId(req.params.user)
    res.send({
        data: borrowList,
    })
}

//책 빌린 사람
const getListByBookID = function(req, res){
    const borrowService = new BorrowService();
    const borrowList = borrowService.findByBookId(req.params.book)
    res.send({
        data: borrowList,
    })
}

//대여기간 연장
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

//책 반납
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