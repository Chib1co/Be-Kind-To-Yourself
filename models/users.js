const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

//create users schema
const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
},
{timestamps: true}
);

//password hash middleware
UserSchema.pre("save", async function save(next){
    const user = this;
    if(!user.isModified("password")) {
        return next();
    }
    await bcrypt
    .genSalt(10)
    .then((salt) => {
        return bcrypt.hash(user.password, salt);
    })
    .then((hash) => {
        user.password = hash;
        next();
    })
    .catch((err) => {
        return next(err)
    })
});

//helper method for validating user's password
UserSchema.methods.comparePassword = function comparePassword(
    candidatePassword,
    cb
){
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        cb(err, isMatch);
    });
};

    const User = mongoose.model("Users", UserSchema);

module.exports = User