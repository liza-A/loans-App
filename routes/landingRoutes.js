const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');
router.use(expressValidator());
const mongoose = require('mongoose');


router.get('/landing', async(req, res) => {
    res.render('landing');
   
});

module.exports = router;