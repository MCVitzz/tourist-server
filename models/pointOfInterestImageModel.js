const Database = require('../database');

const PointOfInterestImage = function (pointOfInterestImage) {
    this.id = pointOfInterestImage.id;
    this.poi = PointOfInterestImage.poi;
    this.image = PointOfInterestImage.image;
}

PointOfInterestImage.getById = async (id) => (await Database.query('SELECT * FROM poi_images WHERE id = ?', id))[0];
PointOfInterestImage.getAll = async () => await Database.query('SELECT * FROM poi_images');
PointOfInterestImage.getByPointOfInterest = async (poi) => await Database.query('SELECT * FROM poi_images WHERE poi = ?', poi);
PointOfInterestImage.create = async (pointOfInterestImage) => await Database.query('INSERT INTO poi_images SET ?', pointOfInterestImage);
PointOfInterestImage.update = async (id, body) => await Database.query('UPDATE poi_images SET ? WHERE id = ?', [body, id]);
PointOfInterestImage.delete = async (id) => await Database.query('DELETE FROM poi_images WHERE id = ', id);

module.exports = PointOfInterestImage;