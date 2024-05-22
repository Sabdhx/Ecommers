const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  title:{type:String,required:true,unique:true},
  description:{type:String,required:true},
  price:{type:Number,min:[1,"much small from normal"],max:[10000,"much large from normal"]},
  discountPercentage:{type:Number,min:[1,"much small from normal"],max:[10000,"much large from normal"]},
  rating: { type: Number, min:[0, 'wrong min rating'], max:[5, 'wrong max price'], default:0},
  stock: { type: Number, min:[0, 'wrong min stock'], default:0},
  brand: { type : String, required: true},
  category: { type : String, required: true},
  thumbnail: { type : String, required: true},
  images:{ type : [String], required: true}
})

const virtualId = productSchema.virtual('id');
virtualId.get(()=>{
  return this._id;
})
productSchema.set('toJSON',{
  virtuals: true,
  versionKey: false,
  transform: function (doc,ret) { delete ret._id}
})

const ProductModel = mongoose.model("product",productSchema)
module.exports = ProductModel