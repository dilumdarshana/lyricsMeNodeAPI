// import required packages

import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import expressWinston from 'express-winston';
import winston from 'winston';
const config = require('./config').local;

// import routers
import Routes from './api/routes';

// define express instence
const app = express();

// connect to mongodb
mongoose.connect(config.dbConnection, { useMongoClient: true });

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

// Routes
Routes(app);

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
    });
});

// export app to make available for outside
module.exports = app;
