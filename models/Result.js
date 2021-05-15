const { truncate } = require('fs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create check results schema

const resultsSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    score:{
        type: Number,
        required: true
    },
    feelings: {
        type: String,
        required: true
    },
    note: {
        type: String,
        allowNull: true
    },
    needlists: {
        type: String,
        allowNull: true
    },
    user_id: {
        type: Schema.Types.ObjectId, 
        ref: "User",
        required: true
    },


})

const Results = mongoose.model("CheckResults", resultsSchema);

module.exports = Results