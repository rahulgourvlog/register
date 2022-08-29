const express = require("express");
const Usersmodel = require("../model/User.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { Router } = require("express");
const Usercontroller = Router();


// register the user 
Usercontroller.post("/register", async (req, res) => {
  const { email, password, firstName, lastName, mobile, Address } = req.body;
  if (req.body.email === undefined || req.body.email === "") {
    return res.status(200).send({
        message: "Please enter a valid email address.",
        error: "email",
    });
}
  if (req.body.firstName === undefined || req.body.firstName === "") {
    return res.status(200).send({
        message: "Please enter a valid first name.",
        error: "firstName",
    });
}
if (req.body.lastName === undefined || req.body.lastName === "") {
    return res.status(200).send({
        message: "Please enter a valid last name.",
        error: "lastName",
    });
}
if (req.body.email === undefined || req.body.email === "") {
    return res.status(200).send({
        message: "Please enter a valid email address.",
        error: "email",
    });
}
if (req.body.password === undefined ||
    req.body.password.length === 0 ||
    req.body.password.length > 10) {
    return res.status(200).send({
        message: "Please give a stronger Password of length smaller then 10 characters",
        error: "password",
    });
}

   bcrypt.hash(password, 10, async function (err, hash) {
        if (err) {
          res.send("please try again");
        }
        const user =  new Usersmodel({
            email,
            password:hash,
          firstName,
          lastName,
          mobile,
          Address,
        });
        console.log(user)
        await user.save();
        res.send("singin successfully");
      });
   

});  


//login the user 

 Usercontroller.post("/login",async(req,res)=>{
const {email,password}=req.body;
const user= await Usersmodel.findOne({email});
if(!user){
    return res.send("Invalid Credentials")
}
console.log(user.password);
let hash=user.password;
const userId = user._id
bcrypt.compare(password, hash, function(err, result) {
  if(err){
    return res.send("Invalid Credentials")
  }
  if(result){
    var token = jwt.sign({email,userId}, 'secret');
    return res.send({"message":"login success", "token" : token,userId})
  }
  else{
    return res.send("Invalid credentials")
}
  
});

 })

// getting the profile 

 Usercontroller.get("/profile/:id",async(req,res)=>{
  const id=req.params.id;
  console.log(id)
  const user= await Usersmodel.find({_id:id});
  console.log(user)
  res.send(user)
  })
 



module.exports = Usercontroller;
