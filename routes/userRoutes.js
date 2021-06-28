const Router = require('express').Router();
const User = require('../controllers/userController');


Router.get('/', User.getAll);
Router.get('/:id', User.get);
Router.post('/', User.create);
Router.put('/:id', User.update);
Router.delete('/:id', User.delete);
Router.get('/login/:name', User.login);
Router.post('/register', User.register);
Router.put('/incrementScans/:name', User.scanned);

module.exports = Router;