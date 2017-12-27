// import required packages
const mongoose = require('mongoose');

 // define artist schema
 const artistSchema = mongoose.Schema({
    
        _id: mongoose.Schema.Types.ObjectId,
        name: String,
        image: String,
        album: {
            name: String,
            year: String,
            image: String,
            lyrics: {
                _id: mongoose.Types.ObjectId
            }
        }
     });
    
     // export to use from outside
     module.exports = mongoose.model('Lyrics', artistSchema);