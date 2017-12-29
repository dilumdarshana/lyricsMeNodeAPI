 /**
  * This model use for mongodb. Use to define mongo table columns
  * looks like this will work as active records
  * mongoose has in-built validation for data types
  */
 
 // import required packages
 const mongoose = require('mongoose');

 // define lyrics schema
 const lyricsSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    song: { type: String, required: true },
	video_url: String,
	lyric: { type: String }
 });

 // export to use from outside
 module.exports = mongoose.model('lyrics', lyricsSchema);