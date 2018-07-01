'use strict';
 
 // import required packages
 const mongoose = require('mongoose');
 const { Schema } = mongoose;

 // define lyrics schema
 const lyricsSchema = mongoose.Schema({
    album_id: {
        type: Schema.ObjectId,
        ref: 'Album',
        default: null
    },
    song_name: {
        type: String,
        required: true
    },
    lyric: {
        type: String
    },
	video_url: {
        type: String,
        default: null
    },
	active: {
        type: Boolean,
        default: true
    },
    date_updated: {
        type: Date
    },
    date_created: {
        type: Date,
        default: Date.now
    }
 }, { collection: 'lyrics' });

 // on update
 lyricsSchema.pre('update', function (next) {
    this.date_updated = new Date();
    next();
});

 // export to use from outside
 module.exports = mongoose.model('Lyrics', lyricsSchema);