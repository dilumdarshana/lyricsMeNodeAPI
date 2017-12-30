/**
 * Authorization controll route
 */

// import required packages
const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('./../../config').local;

// define express router
const authRoutes = express.Router();

// login
authRoutes.post('/login', (req, res) => {

    // mock user
    const user = {
        'id': 1,
        'username': 'apache',
        'email': 'apache@gmail.com'
    };

    // if the user credentials are correct, then generate jwt
    // token will be for 10 minutes
    jwt.sign({user}, config.jwtSalt, {expiresIn: `${config.accessTokenExpires}s`}, (error, token) => {

        res.status(200).json({
            message: 'Token generated successfully',
            expire: Math.floor(Date.now() / 1000) + config.accessTokenExpires,
            token: token
        });
    });
});

// logout
authRoutes.get('/logout', (req, res) => {

    res.status(200).json({
        message: 'Logged out successfully'
    });
});

// export to access by outside
module.exports = authRoutes;
