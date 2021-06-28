const Router = require('express').Router();
const PointOfInterestComment = require('../controllers/pointOfInterestCommentController');


Router.get('/', PointOfInterestComment.getAll);
Router.get('/:id', PointOfInterestComment.get);
Router.get('/getByPoi/:poi', PointOfInterestComment.getByPoi);
Router.get('/hasLike/:user/:comment', PointOfInterestComment.hasLike);
Router.post('/', PointOfInterestComment.create);
Router.put('/:id', PointOfInterestComment.update);
Router.put('/like/:id/:user', PointOfInterestComment.like);
Router.put('/dislike/:id/:user', PointOfInterestComment.dislike);
Router.delete('/:id', PointOfInterestComment.delete);

module.exports = Router;