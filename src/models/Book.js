const shortid = require('shortid');
class Book{
    constructor (id, title, author, total){
        this.id = id; // 책 번호
        this.title = title; // 책 제목
        this.author = author; // 책 저자
        this.total = total; // 총 권수 - 책은 최소 3권
    }

    static newInstance(title, author, total){
        const id = shortid.generate();
        return new Book(id, title, author , total);
    }

    toJson(){
        return{
            id: this.id,
            title: this.title,
            author: this.author,
            total: this.total
        }
    }
    static fromData(data) {
        return new Book(data.id, data.title, data.author, data.total);
      }
}

module.exports = Book;