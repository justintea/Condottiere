const Log = require("../models/log");

const index = async (req, res) => {
  const userId = req.user._id;
  try {
    const logs = await Log.find({ userId });
    logs.sort((a, b) => {
      const dateA = a.date;
      const dateB = b.date;
      if (dateA < dateB) {
        return 1;
      } else {
        return -1;
      }
    });
    console.log(logs);
    res.json(logs);
  } catch (e) {
    res.status(500).json(e);
  }
};

const create = async (req, res) => {
  const data = req.body;
  console.log(req.user._id)
  const userId = req.user._id;
  if (data.userId !== userId) {
    res.status(401).json({ msg: "userID tak match" });
    return
  }
  try {
    const log = await Log.create(data);
    res.status(201).json(log);
  } catch (e) {
    res.status(500).json(e);
  }
};

const updateMany = async (req, res) => {
  const data = req.body;
  const userId = req.user._id;
  const response = [];
  try {
    for (const item of data) {
      if (item.userId !== userId) {
        res.status(401).json({ msg: "userID tak match" });
        return
      }
      const log = await Log.findByIdAndUpdate(item.id, item, { new: true });
      response.push(log);
    }
    res.status(200).json(response);
  } catch (e) {
    res.status(500).json(e);
  }
};

const deleteOne = async (req, res) => {
  const { logId } = req.params;
  const userId = req.user._id;
  try {
    const log = await Log.findOneAndDelete({ _id: logId, userId });
    if (!log) {
      res.status(401).json({ userId, logId, log });
      return
    }
    res.json(log);
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = {
  index,
  create,
  updateMany,
  deleteOne,
};
