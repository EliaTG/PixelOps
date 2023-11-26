const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Game = sequelize.define("games",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    gameName:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    publication:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    imgUrl:{
        type: Sequelize.STRING,
        allowNull: true,
    },
  },  {
    timestamps: false, 
});

module.exports = Game;