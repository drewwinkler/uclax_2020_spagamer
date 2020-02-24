const express = require('express');
const router = express.Router();

const services = require('./servicesData');

router.get('/gallery', (req,res) => { 
    res.json(services.gallery);
    console.log('Retreived Services'); 
});
router.get('/categories', (req,res) => { 
    res.json(services.categories);
    console.log('Retreived Service Categories'); 
});

module.exports = router;