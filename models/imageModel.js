const Database = require('../database');

const Image = function (image) {
    this.id = image.id;
    this.path = Image.path;
}

Image.getById = async (id) => (await Database.query('SELECT * FROM images WHERE id = ?', id))[0];
Image.getAll = async () => await Database.query('SELECT * FROM images');
Image.create = async (image) => await Database.query('INSERT INTO images SET ?', image);
Image.update = async (id, body) => await Database.query('UPDATE images SET ? WHERE id = ?', [body, id]);
Image.delete = async (id) => await Database.query('DELETE FROM images WHERE id = ', id);

module.exports = Image;