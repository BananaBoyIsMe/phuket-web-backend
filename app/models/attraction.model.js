const db = require('./db');

function getAttractionById(id, callback) {
  const query = 'SELECT name, image_url, description, detailed_description, location,things_to_do FROM attractions WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error retrieving attraction by ID: ' + err);
      callback(err, null);
    } else if (results.length === 0) {
      callback(new Error('Attraction not found'), null);
    } else {
      callback(null, results[0]);
    }
  });
}


function getAttractions(req, res) {
  const query = 'SELECT name, description, image_url, url';
  
  db.query(query, (err, attractions) => { 
    if (err) {
      console.error('Error retrieving attractions: ' + err);
      return res.status(500).json({ message: 'Error retrieving attractions' });
    }
    res.json(attractions);
  });
}

function getAttractions(req, res) {

  const query = 'SELECT id, name, description, image_url, detailed_description, location, things_to_do FROM attractions';
  
  db.query(query, (err, attractions) => {
    if (err) {
      console.error('Error retrieving attractions: ' + err);
      return res.status(500).json({ message: 'Error retrieving attractions' });
    }
    res.json(attractions);
  });
}

module.exports = {
  getAttractions,
  
  getAttractionById
};