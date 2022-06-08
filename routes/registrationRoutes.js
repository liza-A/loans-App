const express = require('express');
const router = express.Router();
// const passport = require('passport');
const expressValidator = require('express-validator');
const mongoose = require('mongoose')

router.use(expressValidator());

// Requiring schema
const Registration = require('../models/registrationmodel')

//The get route
router.get('/', (req, res) => {
    res.render('registration');
});

// Posting route
router.post('/registration', (req, res) => {
    //Kylie, declare variables that match your form input names
    const surname = req.body.surname;
    const givenname = req.body.givenname;
    const nin = req.body.nin;
    const date = req.body.date;
    const occupation = req.body.occupation
    const work = req.body.work;
    const gender = req.body.gender;
    const loan = req.body.loan;
    const security = req.body.security;
    const fallback = req.body.fallback;

    const errors = req.validationErrors()
    if (errors) {
        res.render('registration')
    }
// matching my inputs to my schema
    else {
        let newRegistration = new Registration({
            surname: surname,
            givenname: givenname,
            nin: nin,
            date: date,
            occupation: occupation,
            work: work,
            gender: gender,
            loan: loan,
            security: security,
            fallback: fallback,
            

        });
        // Saving registration data
        newRegistration.save((err) => {
            if (err) {
                console.error(err);
                return;
            }
            else {
                // alert('you have successfully registered')
                console.log('Kylie, you have successfully registered your First  client');
                res.redirect('/')
            }
        })
    }

});

module.exports = router;