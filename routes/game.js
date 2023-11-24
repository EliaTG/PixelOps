const express = require("express")
const router = express.Router();

const GameController = require('../controllers/GameController')

router.get("/", GameController.GetIndex);
router.get("/games", GameController.GetGamesList);


module.exports = router;