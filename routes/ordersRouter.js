const express = require("express");
const router = express.Router();

const ordersController = require("../controllers/ordersController")

router.get("/", ordersController.index);
router.post("/", ordersController.createOneOrder);

//* superuser functions
router.get("/", ordersController.indexAllOrders);
//! will need to be id, rather than userId
router.put("/:userId", ordersController.updateOneOrder);
router.delete("/:userId", ordersController.deleteOneOrder);

module.exports = router;