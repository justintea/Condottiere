const express = require("express");
const router = express.Router();

const goalsController = require("../controllers/goalsController")

router.get("/", goalsController.index);
router.post("/", goalsController.create);
router.put("/:goalId", goalsController.updateGoal);
router.delete("/:goalId", goalsController.deleteGoal);

module.exports = router