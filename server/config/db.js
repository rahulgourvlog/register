const mongoose=require("mongoose");
const Connection =mongoose.connect("mongodb+srv://rahulgour:rahul1234@cluster0.aven7kz.mongodb.net/?retryWrites=true&w=majority");
module.exports=Connection;
