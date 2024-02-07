const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const savingSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  isShared: { type: Boolean, default: false },
  amount: { type: Number, required: true },
});

const investmentSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  amount: { type: Number, required: true, default: 0 },
  deposit: { type: Number, required: true, default: 0 },
});

const liabilitySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  amount: { type: Number, required: true, default: 0 },
});

const logSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    date: {
      type: Date,
      required: true,
    },
    savings: {
      type: [savingSchema],
    },
    investments: {
      type: [investmentSchema],
    },
    liabilities: {
      type: [liabilitySchema],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

logSchema.virtual("totalSavings").get(function () {
  let total = 0;
  for (let { amount, isShared } of this.savings) {
    if (isShared) {
      total += amount / 2;
    } else {
      total += amount;
    }
  }
  return total;
});

logSchema.virtual("totalInvestments").get(function () {
  let total = 0;
  for (let { amount } of this.investments) {
    total += amount;
  }
  return total;
});

logSchema.virtual("totalLiabilities").get(function () {
  let total = 0;
  for (let { amount } of this.liabilities) {
    total += amount;
  }
  return total;
});

logSchema.virtual("total").get(function () {
  let total = this.totalSavings + this.totalInvestments - this.totalLiabilities;
  return total;
});

module.exports = model("Log", logSchema);
