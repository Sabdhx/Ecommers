const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const userModel = require('../models/user');
const jwt = require("jsonwebtoken")


const createUser= async (req,res)=>{

  const { userName, email, password, phone, addresses } = req.body;

  try {
    const salt = await bcrypt.genSalt(10); // Generate the salt
    const hash = await bcrypt.hash(password, salt); // Hash the password with the generated salt
    
    const signInResponse = await userModel.create({
      userName,
      email,
      password: hash,
      phone,
      addresses
    });

    res.status(200).json("This is a new user: " + signInResponse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
 
const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    console.log(email, password);
    const validUser = await userModel.findOne({ email });
    
    if (!validUser) return next(customError(400, "User not Found"));

    const validpassword = await bcrypt.compare(password, validUser.password);
    if (!validpassword) {
      return next(customError(401, "Password did not match"));
    }
    
    const { password: hashedpassword, ...rest } = validUser._doc;

    const token = jwt.sign({ id: validUser._id }, "secret", {
      expiresIn: "1d",
    });
      console.log(token)
    res 
      .cookie("token", token, {
        sameSite: "None",
        httpOnly: true,
        secure: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

 const userVerification = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token,"Secret", {}, async (err, usertoken) => {
      if (err) throw err;
      const { name, email, _id, isAdmin, addresses } = await userModel.findById(
        usertoken.id
      );
      res.json({ name, email, _id, isAdmin, addresses });
    });
  }
};

const userLogout= async(req,res)=>{
  res.clearCookie("token",{
    httpOnly:true,
    secure:true,
    sameSite:"none"
  })
  .send({message:"cookie cleared successfully"})
}

module.exports = {createUser,signIn,userVerification,userLogout}