const express = require("express");
const router = express.Router();

const ordersController = require("../controllers/ordersController")

router.get("/", ordersController.index);
router.post("/", ordersController.create);
// router.put("/", logsController.updateMany)

// router.delete("/:logId", logsController.deleteOne)

module.exports = router;