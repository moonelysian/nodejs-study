const UserRepository = require('../database/repositories/UserRepository');
const User = require('../models/User')

class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }
    
    create(id, name, admin){
        const user = User.newInstance(id, name, admin);
        this.userRepository.create(user.toJson());
        
        return user;
    }

    find(){
        const users = this.userRepository.find();
        return users.map(users => User.fromData(users));
    }
    
    findById(id){
        const user = User.fromData(this.userRepository.findById(id));
        return user;
    }
    
    update(id, data){
        const user = User.fromData(this.userRepository.findById(id));
        
        user.block = data.block;
        user.waiting = data.waiting;
        
        this.userRepository.update(id, user.toJson());
    }

    delete(id){
        this.userRepository.delete(id);
    }

}

module.exports = UserService;