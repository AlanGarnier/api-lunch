module.exports = app => {
    const users = require("../controllers/account.controller");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/register", users.register);

    // Sign in a User
    router.post("/login",users.login);

    // Retrieve all users
    router.get("/allUsers", users.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", users.findOne);

    // Update a Tutorial with id
    router.put("/:id", users.update);

    // Delete a Tutorial with id
    router.delete("/:id", users.delete);

    // Create a new Tutorial
    router.delete("/", users.deleteAll);

    app.use('/api/users', router);
};