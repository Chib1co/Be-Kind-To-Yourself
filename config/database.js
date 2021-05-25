const mongoose = require("mongoose");

// Connect to the Mongo DB

function connectDb(){
    mongoose.connect(
        process.env.MONGODB_URI || "mongodb://localhost/Be-Kind-To-Yourself",
        {
            useCreateIndex: true,
            useNewUrlParser: false,
        }
    );
}

module.exports = connectDb;