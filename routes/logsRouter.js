const express = require("express");
const router = express.Router();

const logsController = require("../controllers/logsController")

router.get("/", logsController.index);
router.post("/", logsController.create);
router.put("/", logsController.updateMany)

router.delete("/:logId", logsController.deleteOne)

module.exports = router