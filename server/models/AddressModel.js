var mongoose=require('mongoose');

var addressSchema=mongoose.Schema({
  FlatNo:String,
  Street:String,
  City:String,
  State:String,
  Country:String,
  pinCode:String,
});

var addressModel=mongoose.model('Address',addressSchema);
module.exports.Address = addressModel;
