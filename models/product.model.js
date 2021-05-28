const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  shop_id:{type:String,required:true},
  category_id:{type:String,required:true},
  name: {type:String,required:true},
  detail: {type:String,required:true},
  price: {type:Number,required:true},
  unit: {type:Number,required:true},
});
const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;
