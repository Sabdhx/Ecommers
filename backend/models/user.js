const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName:{ type:String},
  email:{ type:String},
  password:{type:String},
  phone:{type:Number},
  isAdmin:{type:Boolean,default:false},
  addresses:{type:[mongoose.Schema.Types.Mixed],} 
},
{
  Timestamp:true
}
);

const userModel = mongoose.model("userSchema",userSchema)
module.exports = userModel;