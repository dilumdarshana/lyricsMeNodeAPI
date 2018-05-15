'use strict';

const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    artist_id: {
        type: Schema.ObjectId,
        ref: 'Artist',
        default: null
    },
    name: {
        type: String,
        required: true
    },
    year: {
        type: String
    },
    image: {
        type: String,
        default: null
    },
    active: {
        type: boolean,
        default: true
    },
    date_updated: {
        type: Date
    },
    date_create: {
        type: Date,
        default: Date.now
    }
}, { collection: 'albums' });

// on update
artistSchema.pre('update', function (next) {
    this.date_updated = new Date();
    next();
});

module.exports = mongoose.model('Album', albumSchema);