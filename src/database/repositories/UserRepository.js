const BaseRepository = require('./BaseRepository');
const User = require('../../models/User');

class UserRepository extends BaseRepository {
  constructor() {
    super('users');
  }
}

module.exports = UserRepository;