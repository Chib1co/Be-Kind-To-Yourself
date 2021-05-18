const mongoose = require("mongoose");

// Connect to the Mongo DB

function connectDb(){
    mongoose.connect(
        process.env.MONGO_URI || "mongodb://localhost:27017/Be-Kind-To-Yourself",
        {
            useCreateIndex: true,
            useNewUrlParser: true,
        }
    );
}

module.exports = connectDb;