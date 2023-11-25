const express = require("express")
const router = express.Router();

const GameController = require('../controllers/GameController')

router.get("/", GameController.GetIndex);
router.get("/games", GameController.GetGamesList);
router.get("/create-game", GameController.GetCreateGame);
router.post("/create-game", GameController.PostCreateGame);
router.get("/edit-game/:gameId", GameController.GetEditGame);
router.post("/edit-game", GameController.PostEditGame);
router.post("/delete-game", GameController.PostDeleteGame);


module.exports = router;