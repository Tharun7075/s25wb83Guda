var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var results = [
    { flavor: "Chocolate", size: "Large", price: 15 },
    { flavor: "Vanilla", size: "Medium", price: 10 },
    { flavor: "Strawberry", size: "Small", price: 8 }
  ];

  res.render('cakes', { results: results }); // Pass results to Pug template
});

module.exports = router;
