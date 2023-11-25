const express = require("express")
const router = express.Router();

const DevController = require('../controllers/DevController')

router.get("/developers", DevController.GetDeveloperList);
// router.get("/create-developer", DeveloperController.GetCreateDeveloper);
// router.post("/create-developer", DeveloperController.PostCreateDeveloper);
// router.get("/edit-developer/:developerId", DeveloperController.GetEditDeveloper);
// router.post("/edit-developer", DeveloperController.PostEditDeveloper);
// router.post("/delete-developer", DeveloperController.PostDeleteDeveloper);

module.exports = router;