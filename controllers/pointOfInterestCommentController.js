const PointOfInterestCommentLike = require('../models/pointOfInterestCommentLikeModel');
const PointOfInterestCommentModel = require('../models/pointOfInterestCommentModel');

exports.get = async (req, res) => res.send(await PointOfInterestCommentModel.getById(req.params.id));

exports.getAll = async (req, res) => res.send(await PointOfInterestCommentModel.getAll());

exports.create = async (req, res) => {
    let result = await PointOfInterestCommentModel.create(req.body);
    req.body.id = result.insertId;
    req.body.likes = 0;
    res.send(req.body);
}

exports.update = async (req, res) => res.send(await PointOfInterestCommentModel.update(req.params.id, req.body));

exports.delete = async (req, res) => res.send(await PointOfInterestCommentModel.delete(req.params.id));

exports.like = async (req, res) => {
    await PointOfInterestCommentLike.create({ comment: req.params.id, user: req.params.user });
    res.send(await PointOfInterestCommentModel.like(req.params.id));
}

exports.dislike = async (req, res) => {
    let a = await PointOfInterestCommentLike.deleteUserComment(req.params.user, req.params.id);
    console.log('Disliking', a, req.params);
    res.send(await PointOfInterestCommentModel.dislike(req.params.id));
}

exports.getByPoi = async (req, res) => res.send(await PointOfInterestCommentModel.getByPoi(req.params.poi));

exports.hasLike = async (req, res) => {
    let hasLike = await PointOfInterestCommentLike.getByUserComment(req.params.user, req.params.comment);
    res.send(hasLike.length != 0)
};