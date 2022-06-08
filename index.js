require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const expressValidator = require ('express-validator');
const app = express();

// const uri = process.env.MONGODB_URI;


// Import database configurations
// const config = require('./config/database');

// Importing Routes

const registrationRoutes = require('./routes/registrationRoutes');
const landingRoutes = require('./routes/landingRoutes');
// const { PORT } = process.env
// const { WELCOME_MESSAGE, DATABASE_URL } = process.env
// creating a connection between our Controller and Database
// mongoose.connect(config.database)
// const db = mongoose.connection
// Testing Connection to the data
// db.once('open',()=>{
//     console.log('connected to the Database Successfully');
// });

// db.on('error', (err)=>{
// console.error(err);
// });

// setting the view engine
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'views')); 

// Setting directory for static files
app.use(express.static(path.join(__dirname, "public")));

// MIDDLEWARE SECTION
// we are telling node to focus on information in the input fields
app.use(express.urlencoded({extended:false}));
// telling body parser to use json format
app.use (express.json());

// using my imported routes
app.use('/', registrationRoutes);
app.use('/', landingRoutes);



// This message that appears in case someone searches for a route that doesnt exist on my server
app.get('*', (req, res) => {
    res.status(404).send('Hello,This is an invalid URL')
  })

  // / spin up the server 
// mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
//     // successful connection
//     app.listen(PORT, ()=> {
//         let message = `${WELCOME_MESSAGE} http://localhost:${PORT}`
//         console.log(message)
//     })
// }).catch(error => {
//     console.error("Failed to start the server due to : ",error)
// })
// Setting connection port
const port = process.env.PORT 
app.listen(port,()=>{
    console.log(`server started on port ${port}`)
});

module.exports = app; // for testing