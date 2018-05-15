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
        type: boolean,
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
    
// export to use from outside
module.exports = mongoose.model('Artist', artistSchema);