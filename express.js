// require('dotenv').config();
const path = require('path');
const express = require('express');

// Initiaize Instance of Express as app
const app = express();

// POST Requests: In order to accept post requests, you must use bodyParser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

/*---------------------------
| !IMPORTANT :: Should not be done in Production, only for local dev
| Bypassing CORS so express can be on port 5000 and react can be on 3000
| In production you would have Express access a static build of your app.
---------------------------*/
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

/*---------------------------
| Route Collections
---------------------------*/
const routes = require('./express-routes/index.js');
app.use('/staff', routes.staff);
app.use('/services', routes.services);
app.use('/slides', routes.slides);
app.use('/email', routes.email);
app.use('/login', routes.login);

// Catchall for requests that do not match our routing
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/missing.html'));
});

// Heroku hook to use dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('App is listening on port ' + PORT);