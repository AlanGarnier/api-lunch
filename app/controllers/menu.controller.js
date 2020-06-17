const db = require("../models");
const Menu = db.menu;

const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.menu_name || !req.body.menu_price || !req.body.menu_is_available) {
        res.status(400).send({
            message: "Content can not be empty !"
        });
        return;
    }
    
    // Create a Menu 
    const menu = {
        menu_name: req.body.menu_name,
        menu_price: req.body.menu_price,
        menu_is_available: req.body.menu_is_available
    };
    
    // Save a menu
    Menu.create(menu)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Menu"
            })
        })
};

// Find a single Menu with an ID
exports.findOne = (req, res) => {
    const id = req.params.menu_id;
    
    Menu.findByPkAsync(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some occurred while retrieving a menu."
            });
        });
};

// Find all Menus
exports.findAll = (req, res) => {
    Menu.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving menu."
            });
        });
};

// Update a Menu by the id in  the request
exports.update = (req, res) => {
    const id = req.params.id;

    Menu.update(req.body,{
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Menu was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Menu with id=${id}. Maybe Menu was not found or req.body is empty !`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Menu with id=" + id
            });
        });
};