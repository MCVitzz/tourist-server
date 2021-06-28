const PointOfInterestModel = require('../models/pointOfInterestModel');
const ImageModel = require('../models/ImageModel');
const PointOfInterestImageModel = require('../models/pointOfInterestImageModel');

exports.get = async (req, res) => {
    let pointOfInterest = await getImages(await PointOfInterestModel.getById(req.params.id));
    res.send(pointOfInterest);
}

exports.getAll = async (req, res) => {
    let pointsOfInterest = await PointOfInterestModel.getAll();
    for (let pointOfInterest of pointsOfInterest) {
        pointOfInterest = await getImages(pointOfInterest);
    }
    res.send(pointsOfInterest);
}

exports.create = async (req, res) => {
    res.send(await PointOfInterestModel.create(req.body));
}

exports.update = async (req, res) => {
    res.send(await PointOfInterestModel.update(req.params.id, req.body));
}

exports.delete = async (req, res) => {
    res.send(await PointOfInterestModel.delete(req.params.id));
}

async function getImages(pointOfInterest) {
    pointOfInterest.images = [];
    let imagesOfPoi = await PointOfInterestImageModel.getByPointOfInterest(pointOfInterest.id);
    pointOfInterest.images = [];
    for (let pointOfInterestImage of imagesOfPoi) {
        let image = await ImageModel.getById(pointOfInterestImage.image);
        pointOfInterest.images.push(image.path);
    }
    return pointOfInterest;
}