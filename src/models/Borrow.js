const moment = require("moment");

class Borrow {

    constructor(userId, bookId, start, end){
        this.userId = userId;
        this.bookId = bookId;
        this.start = start;
        this.end = end;
    }

    static newInstance(userId, bookId){
        const start = moment().format('YYYY-MM-DD');
        const end = moment(start).add(7 , 'days').format('YYYY-MM-DD');
        return new Borrow(userId, bookId, start, end);
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
        return new Borrow(data.userId, data.bookId, data.start, data.end);
    }

}