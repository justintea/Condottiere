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

//* Login user function
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

//* Checktoken
function checkToken(req, res) {
  console.log("req.user", req.user);
  // that Date object we created for fun
  res.json(req.exp);
}

module.exports = {
  index,
  create,
  login,
  createJWT,
  checkToken,
};
//? added 'createJWT' here, in order to import to 'userprefersController' to use...
