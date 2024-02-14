const Address = require("../models/address");

const create = async (req, res) => {
  const data = req.body;
  console.log('req.user._id: ', req.user._id)
  console.log('req: ', req);
  const userId = req.user._id;

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


const updateOwn = async (req, res) => {
  const userId = req.user._id;
  console.log('userId at addressesCtrl updateOwn', userId);
  try {
    const address = await Address.findOneAndUpdate({ userId });
    res.json(address);
    console.log('from addressesCtrl updateOwn: ', address);
    
  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports = {
  index,
  create,
  updateOwn,
  // deleteOne,
};