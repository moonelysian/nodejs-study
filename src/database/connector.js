const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('../db/example.json');
const db = low(adapter);

db.defaults({ users: [] }).write();
db.defaults({ books: [] }).write();

module.exports = db;