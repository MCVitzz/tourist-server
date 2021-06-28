const UserModel = require('../models/userModel');

exports.get = async (req, res) => res.send(await UserModel.getById(req.params.id));

exports.getAll = async (req, res) => res.send(await UserModel.getAll());

exports.create = async (req, res) => res.send(await UserModel.create(req.body));

exports.update = async (req, res) => res.send(await UserModel.update(req.params.id, req.body));

exports.delete = async (req, res) => res.send(await UserModel.delete(req.params.id));

exports.login = async (req, res) => {
    if (await UserModel.exists(req.params.name)) {
        res.send((await UserModel.getByName(req.params.name))[0]);
    }
    else {
        res.send({ error: 'Not Found' });
    }
}

exports.register = async (req, res) => {
    if (await UserModel.exists(req.body.name)) {
        res.send({ error: 'User already exists.' });
    }
    else {
        req.body.scans = 0;
        let user = await UserModel.create(req.body);
        req.body.id = user.insertId;
        res.send(req.body);
    }
}

exports.scanned = async (req, res) => res.send(await UserModel.incrementUser(req.params.name));