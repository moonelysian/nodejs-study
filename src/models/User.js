class User{
    constructor(id, name, block=false, waiting=false, admin=false){
        this.id = id; //사용자 id
        this.name = name; //사용자 이름
        this.block = block; //차단
        this.waiting = waiting; //대기
        this.admin = admin; //관리자
    }

    static newInstance(id, name){
        return new User(id, name);
    }

    toJson(){
        return{
            id: this.id,
            name: this.name,
            block: this.block,
            waiting: this.waiting,
            admin: this.admin
        }
    }
    static fromData(data) {
        return new User(data.id, data.name, data.block, data.waiting, data.admin);
      }
}

module.exports = User;
