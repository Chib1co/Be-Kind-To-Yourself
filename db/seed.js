const userSeed = require("./userSeeder");
const activitySeed = require("./activitySeeder");
const resultSeed = require("./resultSeeder");


function seeder(){
    userSeed();
    activitySeed();
    resultSeed();
}

seeder();