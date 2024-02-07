const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const goalPreferenceSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    endDate: {
      type: Date,
      required: true,
    },
    targetAmount: {
      type: Number,
      required: true,
    },
    currentAmount: {
      type: Number,
      default: 0,
      required: true,
    },
    dateUpdated: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Goal", goalPreferenceSchema);
