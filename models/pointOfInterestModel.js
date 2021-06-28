const Database = require('../database');

const PointOfInterest = function (pointOfInterest) {
    this.id = pointOfInterest.id;
    this.name = pointOfInterest.name;
    this.scans = pointOfInterest.scans;
    this.rating = pointOfInterest.rating;
    this.ratingCount = pointOfInterest.ratingCount;
}

PointOfInterest.getById = async (id) => (await Database.query('SELECT * FROM poi WHERE id = ?', id))[0];
PointOfInterest.getAll = async () => await Database.query('SELECT * FROM poi');
PointOfInterest.create = async (pointOfInterest) => await Database.query('INSERT INTO poi SET ?', pointOfInterest);
PointOfInterest.update = async (id, body) => await Database.query('UPDATE poi SET ? WHERE id = ?', [body, id]);
PointOfInterest.delete = async (id) => await Database.query('DELETE FROM poi WHERE id = ', id);

module.exports = PointOfInterest;