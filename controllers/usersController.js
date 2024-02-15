const User = require("../models/user");
const debug = require("debug")("mern:controllers:usersController");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const index = async (req, res) => {
  const users = await User.find({});
  res.json(users);
  // const data = req.body;
  // const user = await User.create(data);
  // res.json(user)
};


//*CREATE USER---------------------------------------------
const create = async (req, res) => {
  //? initial code
  // const user = await User.create(req.body)
  // res.json(user)
  //? J: 23/1 0130: create code, + jwt & error handling
  try {
    // Add the user to the db
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
};

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}


//* LOGIN USER FUNCTION
async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json(createJWT(user));
  } catch {
    res.status(400).json("Bad Credentials");
  }
}

//* CHECKTOKEN 
function checkToken(req, res) {
  console.log("req.user", req.user);
  // that Date object we created for fun
  res.json(req.exp);
}


//* SUPERUSER: GET ALL USERS-------------------------------------------
//* use case: without using a db, admin can see all users & details
const indexAllUsers = async (req, res) => {
  // const userId = req.user._id;
  // console.log('userId at ordersCtrl', userId);
  try {
    // const orders = await Order.find({ userId });
    //! check for differences with this VS 'index'. does that work already?
    const allUsers = await User.find();
    res.json(allUsers);
    console.log('from UsersCtrl indexAll: ', allUsers);
    
  } catch (error) {
    res.status(500).json(error);
  }
};

//* SUPERUSER: UPDATE ONE USER-------------------------------------------
//* use case: without using a db, admin can update User's username, email
const updateOneUser = async (req, res) => {
  
  const userId = req.user._id;
  console.log('userId at addressesCtrl updateOneUser', userId);
  try {
    const updatedOneUser = await User.findOneAndUpdate({ userId }, req.body, { new: true });
    res.json(updatedOneUser);
    console.log('updateOneOrder from ordersCtrl: ', updatedOneUser);
    
  } catch (error) {
    res.status(500).json(error);
  }
};


//* SUPERUSER: DELETE ONE USER-------------------------------------------
//* use case: without using a db, admin can delete inactive/dead accounts
const deleteOneUser = async (req, res) => {

  const userId = req.user._id;
  console.log('userId at UsersCtrl deleteOneUser: ', userId);
  try {
    const deletedOneUser = await Order.findOneAndDelete({ userId }, req.body, { new: true });
    res.json(deletedOneUser);
    console.log('deleteOneUser from UsersCtrl: ', deletedOneUser);
    
  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports = {
  index,
  create,
  login,
  createJWT,
  checkToken,

  indexAllUsers,
  updateOneUser, 
  deleteOneUser,
};
//? added 'createJWT' here, in order to import to 'userprefersController' to use...
