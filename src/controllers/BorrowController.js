const BorrowService = require('../services/BorrowService');
const UserService = require('../services/UserService');
const BookService = require('../services/BookService');

const moment = require('moment');

const createBorrow = function(req, res){
    const borrowService = new BorrowService();
    const body = req.body;

    const userInfo = getUserInformation(body.userId)

    // 차단, 대기 중인 user는 책 못 빌림
    if( userInfo.block == true || userInfo.waiting == true){
        res.send({
            data: {
                status: "차단, 대기중 사용자"
            }
        })
    }

    else{
        const borrow = borrowService.create(body.userId, body.bookId);
        res.send({
            data: borrow.toJson(),
        });
    }
    // const type = 'create';
    // setBookTotal(type, body.bookId);
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

    const bookData = []

    borrowList['bookId'].forEach(function(element){
        bookData.push(getBookInformation(element));
    })

    res.send({
        data: borrowList,
        relationships: {
            BorrowedBook: bookData, 
        }
    })
}

//책 빌린 사람
const getListByBookID = function(req, res){
    const borrowService = new BorrowService();
    const borrowList = borrowService.findByBookId(req.params.book)
    
    const userData = []
    
    borrowList['userId'].forEach( function(element) {
        userData.push(getUserInformation(element));
    })

    res.send({
        data: borrowList,
        relationships: {
            BorrowedUser: userData,
        }
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

    const type ='delete'
    console.log(req.params.borrow);

    borrowService.delete(req.params.borrow);
    res.send({
        data: 'success'
    });
}

//user 정보 가져오는 함수
let getUserInformation = function(id){
    const userService = new UserService();
    const user = userService.findById(id);
    return user;
}

//book 정보 가져오는 함수
let getBookInformation = function(id){
    const bookService = new BookService();
    const book = bookService.findById(id);
    return book;
}

// 책이 없으면 못 빌리게
// let setBookTotal = function(type, id){
//     const bookService = new BookService();
//     const book = bookService.findById(id);

//     if(type == 'create'){

//     }
    
//     if(type == 'delete'){

//     }
// }

module.exports = {
    createBorrow,
    getBorrow,
    getBorrowList,
    getListByBookID,
    getListByUserID,
    updateDue,
    deleteBorrow,
}