const express = require("express");
const router = express.Router();

const ordersController = require("../controllers/ordersController")

router.get("/", ordersController.index);
router.post("/", ordersController.create);

//* superuser functions
router.get("/", ordersController.indexAll);
//! will need to be id, rather than userId
router.put("/:userId", ordersController.updateOne);
router.delete("/:userId", ordersController.deleteOne);

module.exports = router;