const express = require('express');
const router = express.Router();

// Route to render the Cakes page
router.get('/', (req, res) => {
    res.render('cakes');  // Ensure the template name matches `cakes.pug`
});

module.exports = router;
