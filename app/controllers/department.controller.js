const db = require("../models");
const Department = db.department;

const Op = db.Sequelize.Op;

// Create and save a Department
exports.create = (req, res) => {
    if (!req.body.department_name) {
        res.status(400).send({
            message: "Content can not be empty !"
        });
        return;
    }
    
    // Create a Department
    const department = {
        department_name: req.body.department_name
    };
    
    // Save a Department
    Department.create(department)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Department"
            })
        })
};

// Retrieve all Department from the database.
exports.findAll = (req, res) => {
    Department.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Department."
            });
        });
};

// Find a single Department with an ID
exports.findOne = (req, res) => {
    const  id = req.params.id;
    //const  id = req.params.Department_id;

    Department.findByPkAsync(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error retrieving Department with id=" + id
            });
        });
};