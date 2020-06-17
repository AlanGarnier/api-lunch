const db = require("../models");
const User = db.users;
const Canteen = db.canteen;
const Employee = db.employee;
const config = require('../config/auth.config');


const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


// Create and Save a new User
exports.register = (req, res) => {
    // Validate request
    let psw = req.body.users_password;
    let checkPsw = req.body.users_Confirmpassword;
    if (!req.body.users_lastName ||
        !req.body.users_firstName ||
        !req.body.users_mail ||
        !req.body.users_login || !req.body.users_password || !req.body.users_Confirmpassword) {
        res.status(400).send({
            message: "Content can not be empty !"
        });
        return;
    }
    if (psw != checkPsw) {
        res.status(400).send({
            message: "Password and Confirm password can not be different"
        });
        return;
    }

    // Create a User
    const user = {
        users_id:0,
        users_lastName: req.body.users_lastName,
        users_firstName: req.body.users_firstName,
        users_mail: req.body.users_mail,
        users_phone: req.body.users_phone,
        users_login: req.body.users_login,
        users_is_admin:0,
        users_password: bcrypt.hashSync(req.body.users_password,8)
    };

    // Save a User in the database
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred  while creating the User."
            })
        })

};

exports.login = (req, res) => {
    User.findOne({
        where: {
            users_login: req.body.users_login
        }
    })
        .then(user => {
            if (!user) {
                return res.status(404).send({ message: "User not found."});
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.users_password,
                user.users_password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "invalid password"
                });
            }

            var token = jwt.sign({users_id: user.users_id}, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            Canteen.findOne({
                where: {
                    users_id: user.users_id
                }
            })
                .then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                        err.message || "Canteen User not found"
                    });
                });

            Employee.findOne({
                where: {
                    users_id: user.users_id
                }
            })
                .then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                        err.message || "Employee User not found"
                    });
                });

            /*var  authorities = [];

            if (user.users_id ) {
                Canteen.find
            }*/


        })
}

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    User.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};

// Find a single User with an ID
exports.findOne = (req, res) => {
    const  id = req.params.id;
    //const  id = req.params.users_id;

    User.findByPkAsync(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error retrieving User with id=" + id
            });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {

};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {

};