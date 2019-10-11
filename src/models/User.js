class User{
    
    constructor(id, name, admin, block=false, waiting){
        this.id = id; //사용자 id
        this.name = name; //사용자 이름
        this.admin = admin; //관리자
        this.block = block; //차단
        if(admin==true) // 승인 대기
            this.waiting = false; 
        else{
            this.waiting = true;
        }
    }

    static newInstance(id, name, admin){
        return new User(id, name, admin);
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
