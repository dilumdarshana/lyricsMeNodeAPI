// import required packages
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

 // define artist schema
 const administratorSchema = mongoose.Schema({
    
        _id: mongoose.Schema.Types.ObjectId,
        username: { type: String, required: true, index: { unique: true } },
        password: { type: String, required: true },
        active: { type: Number, default: 1 }
    });

administratorSchema.pre('save', (next) => {

    let user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if(err) return next(err);

        bcrypt.hash(user.password, salt, (err, hash) => {
            if(err) return next(err);

            user.password = hash;
            next();
        });
    });
});

// export to use from outside
module.exports = mongoose.model('Administrators', administratorSchema);