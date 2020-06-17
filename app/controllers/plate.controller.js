const db = require("../models");
const Plate = db.plate;

const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.plate_name || !req.body.plate_description) {
        res.status(400).send({
            message: "Content can not be empty !"
        });
        return;
    }

    // Create a Plate
    const plate = {
        plate_name: req.body.plate_name,
        plate_description: req.body.plate_description
    };

    // Save a Plate
    Plate.create(plate)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the plate"
            })
        })

};

// Find a single plate with an ID
exports.findOne = (req, res) => {
    const id = req.params.plate_id;

    Plate.findByPkAsync(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some occurred while retrieving a plate."
            });
        });
};

// Find all plates
exports.findAll = (req, res) => {
    Plate.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving plates."
            });
        });
};

// Update a Plate by the id in  the request
exports.update = (req, res) => {
    const id = req.params.id;

    Plate.update(req.body,{
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Plate was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Plate with id=${id}. Maybe Plate was not found or req.body is empty !`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Plate with id=" + id
            });
        });
};

// Delete a Plate with the specified id in the request
exports.delete = (req, res) => {

};