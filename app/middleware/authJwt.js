const jtw = require("jsonwebtoken");
const config = require('../config/auth.config');
const db = require('../models');

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            message: "No token provided !"
        });
    }

    jtw.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized !"
            });
        }
        req.users_id = decoded.id;
    });
};

const authJwt = {
    verifyToken: verifyToken
}
module.exports = authJwt;