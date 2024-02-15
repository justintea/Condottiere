const Order = require("../models/order");

//*CREATE ORDER---------------------------------------------
const createOneOrder = async (req, res) => {
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
    console.log('createOneOrder from ordersCtrl: ', newOrder);
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
const indexAllOrders = async (req, res) => {
  // const userId = req.user._id;
  // console.log('userId at ordersCtrl', userId);
  try {
    // const orders = await Order.find({ userId });
    const allOrders = await Order.find({});
    res.json(allOrders);
    console.log('allOrders from ordersCtrl index: ', allOrders);
    
  } catch (error) {
    res.status(500).json(error);
  }
};

//* SUPERUSER: UPDATE ONE ORDER-------------------------------------------
//* use case: user made an error, calls admin to change
const updateOneOrder = async (req, res) => {
  
  //! must be orderId, not user id. edit later
  const userId = req.user._id;
  console.log('userId at addressesCtrl updateOneOrder', userId);
  try {
      //! could therefore be a findbyIdAndUpdate
    const updatedOneOrder = await Order.findOneAndUpdate({ userId }, req.body, { new: true });
    res.json(updatedOneOrder);
    console.log('updateOneOrder from ordersCtrl: ', updatedOneOrder);
    
  } catch (error) {
    res.status(500).json(error);
  }
};


//* SUPERUSER: DELETE ONE ORDER-------------------------------------------
//* use case: admin clears db, or specific erroneous orders
const deleteOneOrder = async (req, res) => {

  //! must be orderId, not user id. edit later
  const userId = req.user._id;
  console.log('userId at ordersCtrl deleteOneOrder: ', userId);
  try {
          //! could therefore be a findbyIdAndUpdate
    const deletedOneOrder = await Order.findOneAndDelete({ userId }, req.body, { new: true });
    res.json(deletedOneOrder);
    console.log('deleteOne from ordersCtrl: ', deletedOneOrder);
    
  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports = {
  index,
  createOneOrder,

  indexAllOrders,
  updateOneOrder,
  deleteOneOrder,
};