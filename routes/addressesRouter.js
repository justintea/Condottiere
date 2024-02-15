const express = require("express");
const router = express.Router();

const addressesController = require("../controllers/addressesController");

router.post("/", addressesController.create);
router.get("/", addressesController.index);
router.post("/:userId", addressesController.updateOwn);

module.exports = router;