const mongoose = require("mongoose");
const dbUser = require("../models/User");
const connectDb = require("../config/database");
// This file empties the Books collection and inserts the books below
// mongoose.connect(
//     process.env.MONGODB_URI ||
//     "mongodb://localhost/Be-Kind-To-Yourself"
//   );
connectDb();

const userSeed = [
    {
        firstname: "tomomi",
        lastname: "inoue",
        email: "123@gmail.com",
        password: "12345"
    },
    {
        firstname: "james",
        lastname: "parker",
        email: "jjm@gmail.com",
        password: "jj1234"
    },
    {
        firstname: "nicole",
        lastname: "smith",
        email: "nicsm@gmail.com",
        password: "nicer88"
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
