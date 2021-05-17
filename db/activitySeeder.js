const mongoose = require("mongoose");
const dbActivity = require("../models/activity");
const connectDb = require("../config/database");

connectDb()
// mongoose.connect(
//     process.env.MONGODB_URI ||
//     "mongodb://localhost/Be-Kind-To-Yourself"
// );

const activitySeed = [
    {
        day: new Date().setDate(new Date().getDate() - 6),
        meditation: 10,
        exercise: "run",
        duration: 25
    },
    {
        day: new Date().setDate(new Date().getDate() - 5),
        meditation: 5,
        exercise: "walk",
        duration: 30
    },
    {
        day: new Date().setDate(new Date().getDate() - 4),
        meditation: 20,
        exercise: "",
        duration: 0
    },
]

function seedActivity(){

    dbActivity.deleteMany({})
        .then(() => dbActivity.collection.insertMany(activitySeed))
        .then(data => {
            process.exit(0);
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });
}


    module.exports = seedActivity;