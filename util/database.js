const Sequelize = require("sequelize");

const sequelize = new Sequelize("pixelops", "root", "1234", {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
});


module.exports = sequelize;