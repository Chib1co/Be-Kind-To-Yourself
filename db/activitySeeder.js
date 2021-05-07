const mongoose = require("mongoose");
const dbActivity = require("../models/Activity");
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
        exercise: [
            {
                type: "outdoor walk",
                duration: 30,
            }
        ],
    },
    {
        day: new Date().setDate(new Date().getDate() - 5),
        meditation: 5,
        exercise: [
            {
                type: "swim",
                duration: 15,
            }
        ],
    },
    {
        day: new Date().setDate(new Date().getDate() - 4),
        meditation: 15,
        exercise: [
            {
                type: "",
                duration: 0,
            }
        ],
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