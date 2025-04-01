const express = require('express');
const app = express();

// Define your route for cakes
app.get('/cakes', (req, res) => {
    // Declare the results array on the server-side
    const results = [
        { name: "Chocolate Cake", flavor: "Chocolate", price: 20 },
        { name: "Red Velvet", flavor: "Red Velvet", price: 25 },
        { name: "Strawberry Cake", flavor: "Strawberry", price: 18 }
    ];

    // Pass the results array to the Pug view
    res.render('cakes', { results: results });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
