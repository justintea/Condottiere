const Address = require("../models/address");

//*CREATE ADDRESS---------------------------------------------
const create = async (req, res) => {
  console.log('req: ', req);
  const data = req.body;
  const userId = req.user._id;
  console.log('req.userId: ', req.userId)


  if (data.userId !== userId) {
    res.status(401).json({ msg: "userID tak match" });
    return
  }
  try {
    const newAddress = await Address.create(data);
    res.status(201).json(newAddress);
    console.log('from addressesCtrl create: ', newAddress);
  } catch (error) {
    res.status(500).json(error);
  }
};

//* SUPERUSER: GET ONE ADDRESS----------------------------------------
const index = async (req, res) => {
  const userId = req.user._id;
  console.log('userId at addressesCtrl index', userId);
  try {
    const address = await Address.find({ userId });
    res.json(address);
    console.log('from addressesCtrl index: ', address);
    
  } catch (error) {
    res.status(500).json(error);
  }
};

//*UPDATE YOUR ONE ADDRESS-------------------------------------
//*SUPERUSER: UPDATE ONE ADDRESS-------------------------------------
const updateOne = async (req, res) => {
  const userId = req.user._id;
  console.log('userId at addressesCtrl updateOne', userId);
  try {
    const address = await Address.findOneAndUpdate({ userId }, req.body, { new: true });
    res.json(address);
    console.log('updateOne from addressesCtrl: ', address);
    
  } catch (error) {
    res.status(500).json(error);
  }
};



//*SUPERUSER: READ ALL ADDRESSES-------------------------------------
const indexAll = async (req, res) => {
  // const userId = req.user._id;
  // console.log('userId at addressesCtrl index', userId);
  try {
    // const address = await Address.find({ userId });
    const addresses = await Address.find();

    res.json(addresses);
    console.log('indexAll from addressesCtrl: ', addresses);
    
  } catch (error) {
    res.status(500).json(error);
  }
};

//*SUPERUSER: DELETE ONE ADDRESS-------------------------------------
const deleteOne = async (req, res) => {

  //? temporarily using userId as identifier. identify users by userId a bit difficult, email is unique & easier
  const userId = req.user._id;
  console.log('userEmail at addressesCtrl updateOwn', userId);
  try {
    const deletedOne = await Address.findOneAndDelete({ userId }, req.body, { new: true });
    res.json(deletedOne);
    console.log('deleteOne from addressesCtrl: ', deletedOne);
    
  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports = {
  index,
  create,
  updateOne,

  indexAll,
  deleteOne,
};