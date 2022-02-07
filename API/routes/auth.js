const router = require('express').Router();
const User = require('../models/User');
const CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');


//register a user
router.post('/users/register', async (req, res) => {
  var username = req.body.username;
  var email = req.body.email;
  var password = CryptoJs.AES.encrypt(req.body.password, process.env.PASS_SECRET_KEY).toString(); 

  const newUser = new User({
    username: username,
    email: email,
    password: password
  })

  try {
    const savedUser = await newUser.save()
    res.status(200);
    res.json(savedUser) 
  }catch(error) {
    res.status(500)
    res.json(error)
  }
})

//login a user
router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findOne({username: req.body.username})
    if(!user) {
      res.status(401)
      res.json("Invalid credentials or user does not exist")
    }

    const hashedPassword = CryptoJs.AES.decrypt(user.password, process.env.PASS_SECRET_KEY);
    const password = hashedPassword.toString(CryptoJs.enc.Utf8);

    if(password !== req.body.password)  {
      res.status(401)
      res.json("Invalid password")
    }

    //user token for authentication
    const acessToken = jwt.sign({
      id: user._id,
      isAdmin: user.isAdmin
    }, process.env.JWT_SECRET_KEY, {expiresIn: "3d"});

    //Everything works fine, return user found with credentials
    //send other credentials but the password
    //mongodb stores credentilas in _doc for the next line
    const { userPassword, ...userCredentials  } = user._doc;
    res. status(200)
    res.json({  ...userCredentials, acessToken });

  }catch(error) {
    //catch other generic server error
    res.status(500)
    res.json("Calm down nah! Even database wan rest!")
  }
})


module.exports = router;