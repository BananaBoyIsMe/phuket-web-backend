// const Attraction = require('../models/attraction.model');
const db = require('../models/db'); // Import the db connection

// function createAttraction(req, res) {
//   const { name, description, image_url } = req.body;

//   if (!name || !description || !image_url) {
//     return res.status(400).json({ message: 'Name, description, and image_url are required.' });
//   }

//   // Insert the new attraction into the database
//   const query = 'INSERT INTO attractions (name, description, image_url) VALUES (?, ?, ?)';
//   const values = [name, description, image_url];

//   db.query(query, values, (err, results) => {
//     if (err) {
//       console.error('Error creating a new attraction: ' + err);
//       res.status(500).json({ message: 'Error creating a new attraction' });
//     } else {
//       // Return the newly created attraction with its ID
//       const newAttraction = {
//         id: results.insertId,
//         name,
//         description,
//         image_url,
//       };
//       res.status(201).json(newAttraction);
//     }
//   });
// }

// function getAttractions(req, res) {
  //  Attraction.getAllAttractions((err, attractions) => {
//     if (err) {
//       console.error('Error retrieving attractions: ' + err);
//       return res.status(500).json({ message: 'Error retrieving attractions' });
//     }
//     res.json(attractions);
//   });
// }
function getAttractions(req, res) {
  // Construct your query to select specific fields: name, description, image_url.
  const query = 'SELECT name, description, image_url, url FROM attractions';
  
  db.query(query, (err, attractions) => {
    if (err) {
      console.error('Error retrieving attractions: ' + err);
      return res.status(500).json({ message: 'Error retrieving attractions' });
    }
    res.json(attractions);
  });
}

// function addAttractions(req, res) {
//   // Construct your query to select specific fields: name, description, image_url.
//   const query = 'SELECT name, description, image_url,url,location,things_to_do,detailed_description FROM attractions';
  
//   db.query(query, (err, attractions) => {
//     if (err) {
//       console.error('Error retrieving attractions: ' + err);
//       return res.status(500).json({ message: 'Error retrieving attractions' });
//     }
//     res.json(attractions);
//   });
// }



// Your existing code for createAttraction and getAllAttractions.





function getSingleAttraction(req, res) {
  const attractionId = req.params.id;
  // Use attractionId to query the database and retrieve detailed information.

  // Construct your query and retrieve the data.
  const query = 'SELECT name, image_url,description,detailed_description, location, things_to_do FROM attractions WHERE at_id = ?';
  db.query(query, [attractionId], (err, results) => {
    if (err) {
      console.error('Error retrieving a single attraction: ' + err);
      return res.status(500).json({ message: 'Error retrieving a single attraction' });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Attraction not found' });
    }
    // Extract the data and send it as a JSON response.
    const attraction = results[0];
    res.json(attraction);
  });
}

module.exports = {
  getAttractions,
  getSingleAttraction
};