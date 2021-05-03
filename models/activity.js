const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create daily activity schema
const activitySchema = new Schema({
    meditation:{
        type: Number,
        allowNull: true
    },
    exercise: {
        type: String,
        allowNull: true
    },
    duration: {
        type: Number,
        allowNull: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }


})

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity