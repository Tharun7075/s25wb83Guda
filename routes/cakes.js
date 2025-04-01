// cakes.js

var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('cakes',{title: 'search results - cakes'});
});

module.exports = router;