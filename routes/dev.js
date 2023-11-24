const express = require("express")
const router = express.Router();

const DevController = require('../controllers/DevController')

router.get("/developers", DevController.GetDeveloperList);


module.exports = router;