const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categorySchema = new Schema({
  name: {type:String,required:true},
  detail: {type:String,required:true},
});
const CategoryModel = mongoose.model("Category", categorySchema);
module.exports = CategoryModel;
