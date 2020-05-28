
const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.canteen = require("./canteen")(sequelize, Sequelize);
db.command = require("./command")(sequelize, Sequelize);
db.department = require("./department")(sequelize, Sequelize);
db.employee = require("./employee")(sequelize, Sequelize);
db.guest = require("./guest")(sequelize, Sequelize);
db.ligne_cde = require("./ligne_cde")(sequelize, Sequelize);
db.menu = require("./menu")(sequelize, Sequelize);
db.menu_plate = require("./menu_plate")(sequelize, Sequelize);
db.plate = require("./plate")(sequelize, Sequelize);
db.procurement = require("./procurement")(sequelize, Sequelize);
db.status = require("./status")(sequelize, Sequelize);
db.status_command = require("./status_command")(sequelize, Sequelize);
db.type_plate = require("./type_plate")(sequelize, Sequelize);
db.users = require("./users")(sequelize, Sequelize);

module.exports = db;