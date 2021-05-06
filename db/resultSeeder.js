const mongoose = require("mongoose");
const dbResult = require("../models/Result");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactreadinglist"
);

const resultSeed = [
    {
        day: new Date().setDate(new Date().getDate() - 6),
        score: 7,
        feelings: ["tired"],
        note: "work was busy yesterday",
        needlists: "going to bed early"
]

dbResult.deleteMany({})
  .then(() => Workout.collection.insertMany(resultSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
