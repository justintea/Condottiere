const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bcrypt = require("bcrypt");
const SALT_ROUNDS = 6;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, 
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    //* Cybersec: remove p/w property before JSON serialization
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      }
    }
  }
);

//* Mongoose middleware - hashing
userSchema.pre("save", async function (next) {
  
  if (!this.isModified("password")) return next();
  // update the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});


module.exports = model("User", userSchema);
