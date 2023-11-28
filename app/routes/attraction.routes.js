
module.exports = (app) => {
  const AttractionController = require('../controllers/attraction.controller');
  var router = require("express").Router();
  // Define your routes
  router.get('/', AttractionController.getAttractions);
  // Define the route for retrieving a single attraction
  router.get('/:id', AttractionController.getSingleAttraction);
  app.use("/api/attractions", router)
  module.exports = router;
}