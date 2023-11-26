const express = require("express")
const router = express.Router();

const DevController = require('../controllers/DevController')

router.get("/developers", DevController.GetDeveloperList);
router.get("/create-developer", DevController.GetCreateDeveloper);
router.post("/create-developer", DevController.PostCreateDeveloper);
// router.get("/edit-developer/:developerId", DevController.GetEditDeveloper);
// router.post("/edit-developer", DevController.PostEditDeveloper);
// router.post("/delete-developer", DevController.PostDeleteDeveloper);

module.exports = router;