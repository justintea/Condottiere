const Order = require("../models/order");

//*CREATE ORDER---------------------------------------------
const create = async (req, res) => {
  const data = req.body;
  // console.log(req.user._id)
  const userId = req.user._id;
  if (data.userId !== userId) {
    res.status(401).json({ msg: "userID tak match" });
    return
  }
  try {
    const newOrder = await Order.create(data);
    res.status(201).json(newOrder);
    console.log('from ordersCtrl create: ', newOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};


//*GET ONE USER'S ALL ORDERS-------------------------------------------
const index = async (req, res) => {
  const userId = req.user._id;
  console.log('userId at ordersCtrl', userId);
  try {
    const orders = await Order.find({ userId });
    res.json(orders);
    console.log('from ordersCtrl index: ', orders);
    
  } catch (error) {
    res.status(500).json(error);
  }
};


//* SUPERUSER: GET ALL USERS' ALL ORDERS-------------------------------------------
const indexAll = async (req, res) => {
  // const userId = req.user._id;
  // console.log('userId at ordersCtrl', userId);
  try {
    // const orders = await Order.find({ userId });
    const orders = await Order.find();
    res.json(orders);
    console.log('from ordersCtrl index: ', orders);
    
  } catch (error) {
    res.status(500).json(error);
  }
};

//* SUPERUSER: UPDATE ONE ORDER-------------------------------------------
//* use case: user made an error, calls admin to change
const updateOne = async (req, res) => {
  
  //! must be orderId, not user id. edit later
  const userId = req.user._id;
  console.log('userId at addressesCtrl updateOne', userId);
  try {
      //! could therefore be a findbyIdAndUpdate
    const updatedOrder = await Order.findOneAndUpdate({ userId }, req.body, { new: true });
    res.json(updatedOrder);
    console.log('updateOneOrder from ordersCtrl: ', updatedOrder);
    
  } catch (error) {
    res.status(500).json(error);
  }
};


//* SUPERUSER: DELETE ONE ORDER-------------------------------------------
//* use case: admin clears db, or specific erroneous orders
const deleteOne = async (req, res) => {

  //! must be orderId, not user id. edit later
  const userId = req.user._id;
  console.log('userId at ordersCtrl deleteOne: ', userId);
  try {
          //! could therefore be a findbyIdAndUpdate
    const deletedOne = await Order.findOneAndDelete({ userId }, req.body, { new: true });
    res.json(deletedOne);
    console.log('deleteOne from ordersCtrl: ', deletedOne);
    
  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports = {
  index,
  create,

  indexAll,
  updateOne,
  deleteOne,
};