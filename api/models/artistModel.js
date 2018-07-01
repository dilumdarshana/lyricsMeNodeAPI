'use strict';

// import required packages
const mongoose = require('mongoose');

 // define artist schema
 const artistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: null
    },
    active: {
        type: Boolean,
        default: true
    },
    date_updated: Date,
    date_created: {
        type: Date,
        default: Date.now
    }
}, { collection: 'artists' });

// on update
artistSchema.pre('update', function (next) {
    this.date_updated = new Date();
    next();
});

/**
 * Create new artist
 */
artistSchema.statics.create = function (artist) {
    const _this = new this();

    _this.name = artist.name;
    _this.image = artist.image;

    return new Promise((resolve, reject) => {
        _this.save((error, result) => {
            if (error) {
                reject(error);
            }
            resolve(result);
        });
    });
}

artistSchema.statics.delete = function (filter) {
    const _this = this;

    return new Promise((resolve, reject) => {
        _this.remove(filter, (error, result) => {
            if (error) {
                reject(error);
            }
            resolve(result);
        });
    });
}

// export to use from outside
export default mongoose.model('Artist', artistSchema);
