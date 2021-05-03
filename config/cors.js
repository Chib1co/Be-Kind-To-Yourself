
const whitelist = [
    "*",
    "http://localhost:3000",
    "localhost:3000"
];

module.exports = {
    origin: function (origin, callback) {
        if(whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }else {
            callback(new Error("NOt allowed by CORS"));
        }
    },
    credentials: true
};