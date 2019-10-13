const moment = require('moment');
const shortid =  require('shortid');
class Borrow {

    constructor(id, userId, bookId, start, end){
        this.id = id;
        this.userId = userId;
        this.bookId = bookId;
        this.start = start;
        this.end = end;
    }

    static newInstance(userId, bookId){
        const id = shortid.generate();
        const start = moment().format('YYYY-MM-DD');
        const end = moment().add(7 , 'days').format('YYYY-MM-DD');
        return new Borrow(id, userId, bookId, start, end);
    }

    toJSON(){
        return {
            userId: this.userId,
            bookId: this.bookId,
            start: this.start,
            end: this.end
        }
    }

    static formData(data){
        return new Borrow(data.id, data.userId, data.bookId, data.start, data.end);
    }

}