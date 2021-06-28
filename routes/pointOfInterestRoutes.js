const Router = require('express').Router();
const PointOfInterest = require('../controllers/pointOfInterestController');


Router.get('/', PointOfInterest.getAll);
Router.get('/:id', PointOfInterest.get);
Router.post('/', PointOfInterest.create);
Router.put('/:id', PointOfInterest.update);
Router.delete('/:id', PointOfInterest.delete);

module.exports = Router;