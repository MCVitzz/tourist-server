const Database = require('../database');

const User = function (user) {
    this.id = user.id;
    this.name = user.name;
    this.birthdate = user.birthdate;
    this.email = user.email;
    this.scans = user.scans;
}

User.getById = async (id) => (await Database.query('SELECT * FROM users WHERE id = ?', id))[0];
User.getAll = async () => await Database.query('SELECT * FROM users');
User.create = async (user) => await Database.query('INSERT INTO users SET ?', user);
User.update = async (id, body) => await Database.query('UPDATE users SET ? WHERE id = ?', [body, id]);
User.delete = async (id) => await Database.query('DELETE FROM users WHERE id = ', id);
User.getByName = async (name) => await Database.query('SELECT * FROM users WHERE name = ?', name);
User.exists = async (name) => (await Database.query('SELECT 1 FROM users WHERE name = ?', name)).length != 0;
User.incrementUser = async (name) => (await Database.query('UPDATE users SET scans = scans + 1 WHERE name = ?', name));

module.exports = User;