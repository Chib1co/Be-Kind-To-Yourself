
const whitelist = [
    "*",
    "http://localhost:8080",
    "localhost:8080"
];

module.exports = {
    origin: function (origin, callback) {
        if(whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
};