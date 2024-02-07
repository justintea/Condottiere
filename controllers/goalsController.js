const Goal = require("../models/goal");

const index = async (req, res) => {
  const userId = req.user._id;
  try {
    const goals = await Goal.find({ userId });
    res.json(goals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  const data = req.body;
  if (data.userId !== req.user._id) {
    res.status(401).json({ msg: "userID tak match" });
    return;
  }
  try {
    const newGoal = await Goal.create(data);
    res.status(201).json(newGoal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateGoal = async (req, res) => {
  const data = req.body;
  const { goalId } = req.params;
  const userId = req.user._id;
  if (userId !== data.userId) {
    res.status(401).json({ msg: "userID tak match" });
    return;
  }
  try {
    const goal = await Goal.findByIdAndUpdate(goalId, data, { new: true });
    res.status(200).json(goal);
  } catch (e) {
    res.status(500).json(e);
  }
};

const deleteGoal = async (req, res) => {
  try {
    const { goalId } = req.params;
    const userId = req.user._id;
    const goal = await Goal.findOneAndDelete({ _id: goalId, userId });
    if (!goal) {
      res.status(400).json({ error: "Goal not found" });
      return;
    }
    res.status(200).json(goal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  index,
  create,
  updateGoal,
  deleteGoal,
};
