const Database = require('../database');

const PointOfInterestComment = function (comment) {
    this.id = comment.id;
    this.poi = comment.poi;
    this.comment = comment.comment;
    this.likes = comment.likes;
    this.author = comment.author;
}

PointOfInterestComment.getById = async (id) => (await Database.query('SELECT * FROM comments WHERE id = ?', id))[0];
PointOfInterestComment.getAll = async () => await Database.query('SELECT * FROM comments');
PointOfInterestComment.getByPoi = async (poi) => await Database.query('SELECT * FROM comments WHERE poi = ?', poi);
PointOfInterestComment.like = async (id) => await Database.query('UPDATE comments SET likes = likes + 1 WHERE id = ?', id);
PointOfInterestComment.dislike = async (id) => await Database.query('UPDATE comments SET likes = likes - 1 WHERE id = ?', id);
PointOfInterestComment.create = async (comment) => await Database.query('INSERT INTO comments SET ?', comment);
PointOfInterestComment.update = async (id, body) => await Database.query('UPDATE comments SET ? WHERE id = ?', [body, id]);
PointOfInterestComment.delete = async (id) => await Database.query('DELETE FROM comments WHERE id = ', id);

module.exports = PointOfInterestComment;