const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const addressSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true, 
    },
    Country: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    addressUnitNum: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,    
  }
);

module.exports = model("Address", addressSchema);
