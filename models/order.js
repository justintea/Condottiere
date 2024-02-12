const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const serviceSchema = new Schema({
  title: { type: String, required: true },
  details: { type: Object, required: true },
  // price: { type: String, required: true },
});


const orderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User", 
    },
    date: {
      type: Date,
      required: true,
    },
    orders: {
      type: [serviceSchema],
    },
  },
  {
    timestamps: true,
    // toJSON: { virtuals: true },
  }
);



//? insert totals virtuals function here

module.exports = model('Order', orderSchema);
