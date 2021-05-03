const passport = require("passport");
const User = require("../models/User")
const { Strategy: LocalStrategy } = require("passport-local");

passport.serializeUser((user, done) => {
    console.log('serializa user');
    console.log({user});
    done(null, user.id)
});

passport.deserializeUser((id, done) => {
    console.log("deserializa user");

    User.findById(id, (err, user) => {
        console.log("deserialise");
        console.log({user});
        done(err, user)
    });
});


//signing up using Email and Password
passport.use(new LocalStrategy({ usernameField: 'email'}, (email, password, done) => {
    console.log({email});
    User.findOne({email}, (err, user) => {
        if(err) { return done(err); }
        if(!user){
            //done(err, userm infor pass cak to controller)
            return done(null, false, {msg: 'Email ${email} not found'});
        }
        if(!password) {
            return done(null, false, { msg: 'Please enter a password'});
        }
        user.comparePassword(password, (err, isMatch) => {
            if(err) { return done(err); }
            if(isMatch) {
                return done(null, user);
            }
            return done(null, false, {msg: 'Invalid email or password'})
        });
    });
}));

module.exports = passport