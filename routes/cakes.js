const express = require('express');
const app = express();
const path = require('path');

// Set view engine to pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Endpoint to render the cakes results
app.get('/cakes', (req, res) => {
  res.render('cakes');  // Render the cakes.pug file
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
