const userSeed = require("./userSeeder");
const activitySeed = require("./activitySeeder");
const resultSeed = require("./resultSeeder");
const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGO_URI ||"mongodb://localhost/Be-Kind-To-Yourself",
    {
      useNewUrlParser: true,
      useFindAndModify: false
    }
  )


function seeder(){
    userSeed();
    activitySeed();
    resultSeed();
}

seeder();