const db = require('../models');
const User = db.users;

checkDuplicateLoginOrEmail = (req, res, next) => {
    // Login
    User.findOne({
        where: {
            users_login: req.body.users_login
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Failed ! Login is already in use !"
            });
            return;
        }

        // Email
        User.findOne({
            where: {
                users_mail: req.body.users_mail
            }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    message: "Failed ! Email is already in use"
                });
                return;
            }

            next();
        });
    });
};

const checkSignUp = {
    checkDuplicateLoginOrEmail: checkDuplicateLoginOrEmail
};

module.exports = checkSignUp;