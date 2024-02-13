const express = require("express");
const router = express.Router();

const addressesController = require("../controllers/addressesController")

router.get("/", addressesController.index);
router.post("/", addressesController.create);
router.post("/", addressesController.updateOwn);

module.exports = router;