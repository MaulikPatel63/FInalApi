const passport = require('passport');
const RegisterModel = require('../models/RegisterModel');

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'MAULIK';

// passport.use(new JwtStrategy(opts, function (record, done) {
//     RegisterModel.findById(record._id, function (err, user) {
//         if (err) {
//             return done(err, false);
//         }
//         if (user) {
//             return done(null, user);
//         } else {
//             return done(null, false);
//         }
//     });
// }));

passport.use(new JwtStrategy(opts, function (record, done) {
    RegisterModel.findOne(record.id)
        .then(function (user) {
            return done(null, user);
        })
        .catch(function (err) {
            return done(err, false);
        });
}));

module.exports = passport;