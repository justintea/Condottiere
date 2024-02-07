const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const incomeSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    income: {
      type: Number,
      required: true,
    }
  }
)

const userPreferenceSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      unique: true,
    },
    updateFrequency: {
      type: Number,
      unique: true,
    },
    incomeHistory: {
      type: [incomeSchema],
    },
    birthday: {
      type: String,     //reversed
      unique: true,
    }
  }, {
    timestamps: true,
  }
);

module.exports = model("UserPreference", userPreferenceSchema);