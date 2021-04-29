const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create check results schema

const resultsSchema = new Schema({
    score:{
        type: Number,
        required: true
    },
    feelings: {
        type: Array,
        required: true
    },
    note: {
        type: String,
        allowNull: true
    },
    needlists: {
        type: String,
        allowNull: true
    }

})

const Results = mongoose.model("CheckResults", resultsSchema);

module.exports = Results