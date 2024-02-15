const express = require("express");
const router = express.Router();

const addressesController = require("../controllers/addressesController");

router.post("/", addressesController.createOneAddress);
router.get("/", addressesController.index);
router.put("/:userId", addressesController.updateOneAddress);

//* superuser functions (+ updateOwn)
router.get("/", addressesController.indexAllAddresses);
router.delete("/:userId", addressesController.deleteOneAddress);

module.exports = router;