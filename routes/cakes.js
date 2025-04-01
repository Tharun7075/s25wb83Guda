var express = require('express');
var router = express.Router();

/* GET cakes page. */
router.get('/', function(req, res, next) {
  const results = [
    { flavor: "Chocolate", size: "Large", price: 15 },
    { flavor: "Vanilla", size: "Medium", price: 10 },
    { flavor: "Strawberry", size: "Small", price: 8 }
  ];

  res.render('cakes', { results });
});

module.exports = router;
