// import required packages
const express = require('express');
const Lyrics = require('./../models/lyrics');
const mongoose = require('mongoose');
const config = require('./../../config').local;
const jwt = require('jsonwebtoken');
const helper = require('./../includes/helper');

// define express router
const lyricsRoutes = express.Router();

// search for lyrics by keyword
lyricsRoutes.get('/search/:keyword', (req, res, next) => {

    const keyword = req.params.keyword;

    // get all matching records
    Lyrics.find({
        song: new RegExp(keyword, 'i')
    })
    .select('_id song video_url lyric')
    .limit(15)
    .exec()
    .then(results => {
        res.status(200).json({
            message: 'Lyrics search results',
            keyword: keyword,
            records: results.length,
            lyrics: results
        });
    })
    .catch(err => {
        res.status(500).json({
            message: 'Error occured',
            error: err
        })
    });
});

// get a single lyrics by id
lyricsRoutes.get('/:lyricsId', (req, res, next) => {

    const lyricsId = req.params.lyricsId;

    Lyrics.findById(lyricsId)
        .select('song video_url lyric')
        .exec()
        .then(results => {

            if (results) {
                res.status(200).json({
                    message: 'Lyrics for song ID: ' + lyricsId,
                    data: results
                });
            } else {
                res.status(404).json({
                    message: 'No Lyrics for song ID: ' + lyricsId,
                    data: {} 
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'No lyrics found',
                error: err
            })
        });
});

// create a new lyric
lyricsRoutes.post('/', helper.verifyToken, (req, res, next) => {

    jwt.verify(req.token, config.jwtSalt, (error, authData) => {

        if (error) {
            res.status(403).json({
                message: 'Invalid token'
            });
        } else {

            // catch request and bind data to the lyrics model
            const lyrics = new Lyrics({
                _id: new mongoose.Types.ObjectId(),
                song: req.body.song_title,
                video_url: req.body.video_url,
                lyric: req.body.lyric
            });
            
            // save data
            lyrics
                .save()
                .then(results => {
                    res.status(200).json({
                        message: 'Lyric created successfully',
                        request: {
                            method: 'GET',
                            url: `${config.host}:${config.nodePort}/api/${config.apiVersion}/lyrics/${results._id}`
                        },
                        data: {
                            song: results.song,
                            video_url: results.video_url,
                            lyric: results.lyric
                        }
                    });
                })
                .catch(err =>  {
                    res.status(500).json({
                        message: 'Lyric creation failed',
                        error: err
                    });
                });
        }
    });
    
});

// update a lyrics for a given lyric id
lyricsRoutes.patch('/:lyricsId', (req, res, next) => {

    const lyricsId = req.params.lyricsId;
    const updateAttrs = {};

    for(const attr of req.body) {
        updateAttrs[attr.propName] = attr.value;
    }

    Lyrics
        .update({_id: lyricsId}, { $set: updateAttrs})
        .exec()
        .then(resutls => {
            res.status(200).json({
                message: `Lyric updated successfully. Song ID: ${lyricsId}`,
                data: resutls
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error occured',
                error: err
            });
        });
});

// delete a lyric for a given lyric id
lyricsRoutes.delete('/:lyricsId', (req, res, next) => {

    const lyricsId = req.params.lyricsId;

    Lyrics
        .remove({_id: lyricsId})
        .exec()
        .then(resutls => {
            res.status(200).json({
                message: 'Lyrics removed successfully'
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error occured',
                error: err
            });
        })
});

// export to access by outside
module.exports = lyricsRoutes;