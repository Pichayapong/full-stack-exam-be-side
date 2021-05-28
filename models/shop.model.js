const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shopSchema = new Schema({
  name: {type:String,required:true},
  detail: {type:String,required:true},
  phonenumber: {type:String,required:true},
  address: {type:String,required:true}
});
const ShopModel = mongoose.model("Shop", shopSchema);
module.exports = ShopModel;
