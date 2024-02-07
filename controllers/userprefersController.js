const debug = require("debug")("mern:controllers:userprefersController");
const UserPreference = require('../models/userPreference');
// import * as usersController from './usersController';
const usersController = require('./usersController');

//? hypothesis: this doesnt work, because you need a unique userID
// const createBirthday = async (req, res) => {
//   // const { birthday } = req.body;
//   try {
//     const data = req.body;
//     const userBirthday = await UserPreference.createBirthday(data);
//     res.json({ userBirthday });
//     // const token = usersController.createJWT(userbirthday);
//     // res.json(token);
//   }
//   catch (err) {
//     res.status(400).json(err);
//   }
//   }


const createUserPrefer = async (req, res) => {
  const data = req.body
  const userP = await UserPreference.create(data)
  res.json(userP)
}

//? hypothesis: try implementing it 
const createBirthday = async (req, res) => {
  // const { birthday } = req.body; 
  try {
    const data = req.body;
    const userBirthday = await UserPreference.create(data);
    res.json(userBirthday);
    // const token = usersController.createJWT(userbirthday);
    // res.json(token);
  }
  catch (err) {
    res.status(400).json(err);
  }
  }

const indexBirthday = async (req, res) => {
  const userBirthday = await UserPreference.find({});
  res.json(userBirthday);

} 

//* working code
const getOneBirthday = async (req, res) => {
  const { userId } = req.params;

  const userBirthday = await UserPreference.findOne(userId);

  res.json( userBirthday );

}

//* testing 
// const getOneBirthday = async (req, res) => {
//   const userId = req.user._id;

//   const userBirthday = await UserPreference.findOne(userId);
//   // let showBirthday = userBirthday.birthday;
//   // console.log(userBirthday);
//   // console.log(showBirthday);

//   res.json( userBirthday );
// }


const updateBirthday = async (req, res) => {
  try {
    // const { userId } = req.params;
    const userId = req.user._id;
    console.log(userId);
    console.log(req.user);
    console.log(req.user._id);

    const data = req.body;
    const userBirthday = await UserPreference.findOneAndUpdate( {userId}, data, { new: true });
    res.json(userBirthday);
    // res.json({msg: 'testing' });
    // const token = usersController.createJWT(userbirthday);
    // res.json(token);
  }
  catch (err) {
    res.status(400).json(err);
  }
  }


const createIncome = async (req, res) => {
  const { date, income } = req.body; 

  try {
    const income = await UserPreference.create(req.body);


    const token = usersController.createJWT(income);
    res.json(token);
  }
  catch (err) {
    res.status(400).json(err);
  }

}

const indexIncome = async (req, res) => {
  const preference = await UserPreference.find({})
  res.json(preference)

} 

module.exports = {
  createBirthday,
  indexBirthday,
  getOneBirthday,
  updateBirthday,
  createUserPrefer,
  createIncome,
  indexIncome,
}
