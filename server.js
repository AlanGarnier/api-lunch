// Import express, body-parser and cors module
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// Parse requests of content type - application/json
app.use(bodyParser.urlencoded({extended: true}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Lunch application." });
});

// Users route
require("./app/routes/account.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const  db = require("./app/models");
//db.sequelize.sync();
db.sequelize.sync({ alter: true});