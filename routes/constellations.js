var express = require('express');
var router = express.Router();

/* GET constellations page. */
router.get('/', function(req, res, next) {
  res.render('constellations', { title: 'Search Results - Constellations' });
});

module.exports = router;
