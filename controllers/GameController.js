const Game = require("../models/Game");


exports.GetIndex = (req,res, next) => {
    res.render("games/index", {
        pageTitle: "PixelOps",
    })
}