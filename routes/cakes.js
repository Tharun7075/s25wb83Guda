// cakes.js
var express = require('express');
var router = express.Router();

/* GET cakes search results. */
router.get('/', function(req, res, next) {
  // Define the array of cakes in the route handler
  var results = [
    {name: 'Chocolate Cake', flavors: 'Chocolate, Vanilla', price: 15.99},
    {name: 'Red Velvet Cake', flavors: 'Red Velvet, Cream Cheese', price: 20.99},
    {name: 'Carrot Cake', flavors: 'Carrot, Walnut', price: 18.50}
  ];
  // Render the 'cakes' template and pass the results array to it
  res.render('cakes', { results: results });
});

module.exports = router;
