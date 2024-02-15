const Order = require("../models/order");

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


module.exports = {
  index,
  create,
  // updateMany,
  // deleteOne,
};