const mongoose=require("mongoose");
const {model,Schema}=require("mongoose")
const UserSchema = new Schema({
    email: {
      type: String,reqiured:true
    },
    firstName: { type: String, maxlength: 20 },
    lastName: { type: String, maxlength: 20 },
    password: { type: String, minlength: 4},
    mobile:{type:String,minlength:10},
    Address:{type:String}
  });





const Usersmodel=model("user",UserSchema);
module.exports=Usersmodel;
