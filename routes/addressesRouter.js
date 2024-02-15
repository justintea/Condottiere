const express = require("express");
const router = express.Router();

const addressesController = require("../controllers/addressesController");

router.post("/", addressesController.create);
router.get("/", addressesController.index);
router.put("/:userId", addressesController.updateOne);

//* superuser functions (+ updateOwn)
router.get("/", addressesController.indexAll);
router.delete("/:userId", addressesController.deleteOne);

module.exports = router;