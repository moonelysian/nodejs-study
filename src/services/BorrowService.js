const BorrowRepository = require('../database/repositories/BorrowRepository');
const Borrow = require('../models/Borrow');



class BorrowService{
    constructor(){
        this.borrowRepository = new BorrowRepository();
    }

    // 목록 생성
    create(userId, bookId){
        const borrow = Borrow.newInstance(userId, bookId);
        this.borrowRepository.create(borrow.toJson());
        return borrow;
    }

    //전체 목록
    find(){
        const borrowList = this.borrowRepository.find();
        return borrowList.map(borrowList => Borrow.formData(borrowList));
    }

    //borrow id로 찾기
    findById(id){
        const borrow = Borrow.formData(this.borrowRepository.findById(id));
        return borrow;
    }

    // 특정 사용자가 빌린 책 목록
    findByUserId(userId){
        const borrowList = Borrow.formData(this.borrowRepository.findByUserId(userId));
        return borrowList;
    }

    // 특정 책을 빌린 사용자 목록
    findByBookId(bookId){
        const borrowList = Borrow.formData(this.borrowRepository.findBookId(bookId));
        return borrowList;
    }

    // 대여기간 연장
    update(id, data){
        const borrow = Borrow.formData(this.borrowRepository.findById(id));
        
        borrow.end = data.end || borrow.end;

        this.borrowRepository.update(id, borrow.toJson());
    }

    // 책 반납
    delete(id){
        this.borrowRepository.delete(id);
    }
}

module.exports = BorrowService;