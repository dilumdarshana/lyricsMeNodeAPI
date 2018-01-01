// import required packages
const express = require('express');
const Administrator = require('./../models/administrator');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('./../../config').local;
const helper = require('./../includes/helper');


// define express router
const administratorRoutes = express.Router();

// get all administrators
administratorRoutes.get('/', (req, res, next) => {

    res.status(200).json({
        message: 'Listing all administrators'
    });
});

// create a new administrator
administratorRoutes.post('/', helper.verifyToken, (req, res) => {

    jwt.verify(req.token, config.jwtSalt, (error, authData) => {
        
        if (error) {
            res.status(403).json({
                message: 'Invalid token'
            });
        } else {
            
            const administrator = new Administrator({

                _id: new mongoose.Types.ObjectId(),
                username: 'apache',
                password: 'apache'
            });
            
            administrator
                .save()
                .then(result => {
                    
                    res.status(200).json({
                        message: 'Administrator created successfully',
                        data: result
                    });
                })
                .catch(err => {

                    res.status(500).json({
                        message: 'Administrator creation failed',
                        error: err
                    });
                });
            
        }
    });
});

// export to use from outside
module.exports = administratorRoutes;