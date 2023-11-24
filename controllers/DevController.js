const Dev = require("../models/Dev");
const Game = require("../models/Game");

exports.GetDeveloperList = (req, res, next) => {
  
    res.render("devs/developers-list", {
        pageTitle: "Developers List",
    })
    

}

// exports.GetCreateDeveloper = (req, res, next) => {



// }

