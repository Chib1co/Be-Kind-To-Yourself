const mongoose = require("mongoose");
const dbUser = require("../models/User");

// This file empties the Books collection and inserts the books below
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactreadinglist"
  );
  
const userSeed = [
    {
        firstname: "tomomi",
        lastname: "inoue",
        email: "123@gmail.com",
        password:"12345"
    },
    {
        firstname: "james",
        lastname: "parker",
        email: "jjm@gmail.com",
        password:"jj1234"
    },
    {
        firstname: "nicole",
        lastname: "smith",
        email: "nicsm@gmail.com",
        password:"nicer88"
    },
]

db.User
.remove({})
.then(() => db.User.collection.insertMany(userSeed))
.then(data => {
    process.exit(0)

})

module.exports = seedData;
