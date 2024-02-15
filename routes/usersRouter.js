const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController")

router.get("/", usersController.index);

//* POST /api/users/ (sign up)
router.post("/", usersController.create);

//* POST /api/users/login (log in )
router.post('/login', usersController.login);

//* GET /api/users/check-token  (check token)
router.get('/check-token', usersController.checkToken);

//* superuser functions 
router.get("/", usersController.indexAllUsers);
router.put("/:userId", usersController.updateOneUser);
router.delete("/:userId", usersController.deleteOneUser);


module.exports = router;