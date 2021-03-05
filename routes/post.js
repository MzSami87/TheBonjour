const express = require('express');

const router = express.Router();

//ROUTES
router.get('/', (req,res) => {
    res.send('WE ARE POSTS');
});

router.get('/specific', (req,res) => {
    res.send('Specific Post');
});


module.exports = router;
