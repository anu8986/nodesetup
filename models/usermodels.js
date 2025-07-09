const mongoose = require("mongoose");

const userschema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "email id is required"],
    trim: true,
    unique: [true, "email is already exist"],
    minlength: [5, "email should be contain the 5 character"],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "passowrd is required"],
    trim: true,
    select: false,
  },
  verifed: {
    type: Boolean,
    default: false,
  },
  verificationCode: {
    type: String,
    select: false,
  },
  verificationCodevalidation: {
    type: Number,
    select: false,
  },
  forgotpassowrdCode: {
    type: String,
    select: false,
  },
  forgotpassowrdCodevalidation: {
    type: Number,
    select: false,
  },
},{
    timestamps:true
});


module.exports=mongoose.model("user",userschema)
