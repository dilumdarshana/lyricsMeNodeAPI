// import required packages
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config').local;

// define express instence
const app = express();

// import routers
const authRoute = require('./api/routes/auth');
const lyricsRoutes = require('./api/routes/lyrics');

// connect to mongodb
mongoose.connect(config.dbConnection);

// mongoose promise depricated. So, we use global
mongoose.Promise = global.Promise;

// log request activities as middleware. All the requests wil be print into the console.
app.use(morgan('dev'));

// inform that we are going to use body-parser
// usrlencoded - this type of body will be convert
// extended - which need to allow rich data or simple data
app.use(bodyParser.urlencoded({
    extended: true
}));
// body-parser use to convert http post data to json
app.use(bodyParser.json());

// resolve CORS access
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // allow all origins
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-Width, Content-Type, Accept, Authorization'
    );

    // resolving pre-flights from the browser
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE');
        return res.status(200).json({}); // sending emtpy json with success status
    }

    next(); // ask to procceed the rest of the routes just in case
});

// authentication routes
app.use('/api/auth', authRoute);

// lyrics routes
app.use(`/api/${config.apiVersion}/lyrics`, lyricsRoutes);

/*
 * Error handling for undefined route requests
 */
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// catch throwed errors and return to user
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status
        }
    })
});

// export app to make available for outside
module.exports = app;
