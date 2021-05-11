const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
// const dotenv = require("cookie-parser");
require('dotenv').config()
const cors = require("cors");
const corsConfig = require("./config/cors");
const passport = require("passport");
const connectDb = require("./config/database");

var MongoDBStore = require('connect-mongodb-session')(session);
const routes = require("./routes");

const app = express();

connectDb();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser(process.env.SESSION_SECRET));

// app.use(cors(corsConfig.origin));

const PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: process.env.SESSION_SECRET,
        cookie: {
            secure: false, 
            maxAge: 1209600000,
        }, //2 weeks in milliseconds
        store: new MongoDBStore({
            url: process.env.MONGODB_URI,
            autoReconnect: true,
        }),
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", routes);
app.get("/", (req, res) => {
  res.send("hello")
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
