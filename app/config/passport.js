
//load bcrypt
var bCrypt = require('bcrypt-nodejs');

module.exports = function (passport, user) {

    var User = user;
    var LocalStrategy = require('passport-local').Strategy;


    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });


    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        User.findByPk(id).then(function (user) {
            if (user) {
                done(null, user.get());
            }
            else {
                done(user.errors, null);
            }
        });

    });


    passport.use('local-signup', new LocalStrategy(

        //The quotes are the ids of the input fields
        {
            usernameField: 'signup-username',
            passwordField: 'signup-password',
            passReqToCallback: true // allows us to pass back the entire request to the callback// Not sure what this does tbh - Mike
        },

        function (req, uname, password, done) {


            var generateHash = function (password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            User.findOne({ where: { username: uname } }).then(function (user) {

                if (user) {
                    return done(null, false, { message: 'That username is already taken' });
                }

                else {
                    var userPassword = generateHash(password);
                    var data =
                    {
                        username: uname,
                        password: userPassword,
                    };


                    User.create(data).then(function (newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }

                        if (newUser) {
                            return done(null, newUser);

                        }


                    });
                }


            });



        }



    ));

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(

        {

            //The quotes are the ids of the input fields
            usernameField: 'signin-username',
            passwordField: 'signin-password',
            passReqToCallback: true // allows us to pass back the entire request to the callback// Not sure what this does tbh - Mike
        },

        function (req, uname, password, done) {

            var User = user;

            var isValidPassword = function (userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }

            User.findOne({ where: { username: uname } }).then(function (user) {

                if (!user) {
                    return done(null, false, { message: 'Email does not exist' });
                }

                if (!isValidPassword(user.password, password)) {

                    return done(null, false, { message: 'Incorrect password.' });

                }

                var userinfo = user.get();

                return done(null, userinfo);

            }).catch(function (err) {

                console.log("Error:", err);

                return done(null, false, { message: 'Something went wrong with your Signin' });


            });

        }
    ));

}

