//- cakes.js
var express = require('express');
var app = express();

// Serve static files
app.use(express.static('public'));

// Set view engine
app.set('view engine', 'pug');

// Endpoint for Cakes
app.get('/cakes', function(req, res) {
    res.render('cakes'); // This will render cakes.pug
});

// Start the server
var server = app.listen(3000, function() {
    console.log('Server running on http://localhost:3000');
});
