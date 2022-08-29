const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8000;

const Connection = require("./config/db");
const Usercontroller = require("./Routes/user.route");
const authentication = require("./middlewares/authentication");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/user",Usercontroller)
app.use(authentication)

app.listen(PORT, async() => {
  try{
    await Connection;
    console.log("connected to the db")
  }
  catch(err){
    console.log("error connecting to db")
    console.log(err)
}
console.log("listening to the port 8000")


});
