const Database = require('../database');

const PointOfInterestCommentLike = function (comment) {
    this.id = comment.id;
    this.poi = comment.poi;
    this.comment = comment.comment;
    this.likes = comment.likes;
    this.author = comment.author;
}

PointOfInterestCommentLike.getById = async (id) => (await Database.query('SELECT * FROM comment_likes WHERE id = ?', id))[0];
PointOfInterestCommentLike.getAll = async () => await Database.query('SELECT * FROM comment_likes');
PointOfInterestCommentLike.getByUserComment = async (user, comment) => await Database.query('SELECT * FROM comment_likes WHERE user = ? AND comment = ?', [user, comment]);
PointOfInterestCommentLike.create = async (comment) => await Database.query('INSERT INTO comment_likes SET ?', comment);
PointOfInterestCommentLike.delete = async (id) => await Database.query('DELETE FROM comment_likes WHERE id = ?', id);
PointOfInterestCommentLike.deleteUserComment = async (user, comment) => await Database.query('DELETE FROM comment_likes WHERE user = ? AND comment = ?', [user, comment]);

module.exports = PointOfInterestCommentLike;