const express = require("express")
const router = express.Router()
const foodController = require("../controllers/foodController")

router.get("/food",foodController.getAllFood)
router.post("/food",foodController.postFood)
router.delete("/food/:id",foodController.deleteFood)
router.get("/food/:id",foodController.getFoodId)



module.exports = router