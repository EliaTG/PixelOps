const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Developer = sequelize.define("developer",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    location:{
        type: Sequelize.STRING,
        allowNull: true,
    },
   },  {
        timestamps: false, 
});

module.exports = Developer;