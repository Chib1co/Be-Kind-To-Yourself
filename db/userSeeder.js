const mongoose = require("mongoose");
const dbUser = require("../models/User");
const connectDb = require("../config/database");

connectDb();

const userSeed = [
    {
        firstname: "tomomi",
        lastname: "inoue",
        email: "123@gmail.com",
        password: "$2y$10$wCXgqyBla4dkU.JnrXMfB.e0ZZ1n0AGfpuZL8maLKoLoqacuNJK5W"
    },
    {
        firstname: "james",
        lastname: "parker",
        email: "jjm@gmail.com",
        password: "$2y$10$SbZfrSQHdGsZusH1UnE19e21WWwJf1nutsb7QiuOxbJ9aGJRoTeiK"
    },
    {
        firstname: "nicole",
        lastname: "smith",
        email: "nicsm@gmail.com",
        password: "$2y$10$.N..PTvbN/xSFSh3gS9jF.kej6fFJQE8A2jKXZVFJQtaQ0BlfC2/S"
    },
]

function seedUser() {

    dbUser.deleteMany({})
        .then(() => dbUser.collection.insertMany(userSeed))
        .then(data => {
            process.exit(0)
        })
        .catch(err => {
            console.log(err);
            process.exit(1)
        });
}

module.exports = seedUser;
