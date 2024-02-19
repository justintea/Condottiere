const mongoose = require("mongoose");
const { Schema, model } = mongoose;

//?   Data structures
//    [{ title: paintsvc, details: {} },
//    { title: masterclass, details: {} }]
//    For example: 
//    [{ title: paintsvc, details: {numberofmodels: www, size: xxx, urgency: yyy, price: zzz} },
//    { title: masterclass, details: { classtype: xxx, price: yyy } }]
  

const detailSchema = new Schema({
  numberOfModels: { type: String },
  sizeComplexity: { type: String },
  urgencyRequired: { type: String },
  qualityRequired: { type: String },

  classType: { type: String },
  dateTime: {
    type: String,
    required: true,
  },
  itemPrice: { type: String },
});


const serviceSchema = new Schema({
  title: { type: String, required: true },
  details: { type: detailSchema }, 
    // type: [cartSchema], required: true
  // price: { type: String, required: true },
});


const orderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User", 
    },
    dateTime: {
      type: Date,
      required: true,
    },
    items: {
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
