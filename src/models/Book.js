const shortid = require('shortid');
class Book{
    constructor (id, title, author, lend=false){
        this.id = id; // 책 번호
        this.title = title; // 책 제목
        this.author = author; // 책 저자
        this.lend = lend; // 빌림 여부
    }

    static newInstance(title, author){
        const id = shortid.generate();
        return new Book(id, title, author);
    }

    toJson(){
        return{
            id: this.id,
            title: this.title,
            author: this.author,
            lend: this.lend
        }
    }
    static fromData(data) {
        return new Book(data.id, data.title, data.author, data.lend);
      }
}

module.exports = Book;