const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create users schema
const UserSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
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
        required: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    }

})

const Users = mongoose.model("Users", UserSchema);

module.exports = Users