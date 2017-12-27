 // import required packages
 const mongoose = require('mongoose');

 // define lyrics schema
 const lyricsSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    song: String,
	video_url: String,
	lyric: String
 });

 // export to use from outside
 module.exports = mongoose.model('lyrics', lyricsSchema);