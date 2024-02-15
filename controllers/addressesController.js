const Address = require("../models/address");

//*CREATE ADDRESS---------------------------------------------
const createOneAddress = async (req, res) => {
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
const updateOneAddress = async (req, res) => {
  const userId = req.user._id;
  console.log('userId at addressesCtrl updateOneAddress', userId);
  try {
    const updatedAddress = await Address.findOneAndUpdate({ userId }, req.body, { new: true });
    res.json(updatedAddress);
    console.log('updateOneAddress from addressesCtrl: ', updatedAddress);
    
  } catch (error) {
    res.status(500).json(error);
  }
};



//*SUPERUSER: READ ALL ADDRESSES-------------------------------------
const indexAllAddresses = async (req, res) => {
  // const userId = req.user._id;
  // console.log('userId at addressesCtrl index', userId);
  try {
    // const address = await Address.find({ userId });
    const allAddresses = await Address.find();

    res.json(allAddresses);
    console.log('indexAllAddresses from addressesCtrl: ', allAddresses);
    
  } catch (error) {
    res.status(500).json(error);
  }
};

//*SUPERUSER: DELETE ONE ADDRESS-------------------------------------
const deleteOneAddress = async (req, res) => {

  //? temporarily using userId as identifier. identify users by userId a bit difficult, email is unique & easier
  const userId = req.user._id;
  console.log('userEmail at addressesCtrl deleteOneAddress', userId);
  try {
    const deletedOneAddress = await Address.findOneAndDelete({ userId }, req.body, { new: true });
    res.json(deletedOneAddress);
    console.log('deleteOneAddress from addressesCtrl: ', deletedOneAddress);
    
  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports = {
  index,
  createOneAddress,
  updateOneAddress,

  indexAllAddresses,
  deleteOneAddress,
};