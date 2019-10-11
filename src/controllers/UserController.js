const UserService = require('../services/UserService');

const createUser = function(req, res){
    const userService = new UserService();
    const body = req.body;
    console.log(req.body);
    const user = userService.create(body.id, body.name, body.admin);
    res.send({
        data: user.toJson(),
    });

}

const getUsers = function(req, res){
    const userService = new UserService();
    const users = userService.find();
    res.send({
        data: users,
    })
}

const getUser = function(req, res){
    const userService = new UserService();
    const user = userService.findById(req.params.user);
    res.send({
        data: user,
    });
}

const updateUser = function(req, res){
    const userService = new UserService();
    const body = req.body;
    const data = {
        block: body.block,
        waiting: body.waiting,
    };

    const user = userService.update(req.params.user, data);
    res.send({
        data: user,
    });
}

const deleteUser = function(req, res){
    const userService = new UserService();
    userService.delete(req.params.user);
    res.send({
        data: 'success'
    });
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}