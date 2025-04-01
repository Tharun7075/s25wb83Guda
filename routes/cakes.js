var express = require('express');
var router = express.Router();

/* GET cakes page. */
router.get('/', function(req, res, next) {
  // Hardcoded array of cakes (you can later replace this with data from a database)
  var results = [
    { flavor: "Chocolate", size: "Large", price: 15 },
    { flavor: "Vanilla", size: "Medium", price: 10 },
    { flavor: "Strawberry", size: "Small", price: 8 }
  ];

  // Render the cakes.pug view and pass the results as context
  res.render('cakes', { results: results });
});

module.exports = router;
