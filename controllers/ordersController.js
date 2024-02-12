const Order = require("../models/order");

const create = async (req, res) => {
  const data = req.body;
  console.log(req.user._id)
  const userId = req.user._id;
  if (data.userId !== userId) {
    res.status(401).json({ msg: "userID tak match" });
    return
  }
  try {
    const newOrder = await Order.create(data);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports = {
  // index,
  create,
  // updateMany,
  // deleteOne,
};