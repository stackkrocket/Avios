const router = require('express').Router();
const User = require('../models/User');
const { verifyToken, authorizeToken, authorizeAdmin } = require('./verify');
const CryptoJS = require('crypto-js')

router.put('/users/:id', authorizeToken, async (req, res) => {
  //encrypt password while being encrypted
  if(req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET_KEY).toString(); 
  }

  //find the user by its ID and updated with provided credentials
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {new: true})

    res.status(200)
    res.json(updateUser);

  }catch(error) {
    res.status(500);
    res.json(error);
  }
})

router.delete('/users/:id', authorizeToken, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    res.status(200)
    res.json(`This user with username: ${deletedUser} has been deleted`)

  } catch (error) {
    res.status(500)
    res.json(error)
  }
})

//Get a particular User
router.get('/users/:id', authorizeAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const { password, ...userCredentials  } = user._doc;
    res.status(200)
    res.json(userCredentials);

  } catch (error) {
    res.status(500)
    res.json(error);
  }
})

//Get all users
router.get('/users', authorizeAdmin, async (req, res) =>  {
  const queryString = req.query.new;
  try {
    const users = queryString ? await User.find().sort({_id: -1}).limit(5) : await User.find();
    res.status(200).json(users)

  } catch (error) {
    res.status(500).json(error);
  }
})

//get user statistics
router.get('/stats', authorizeAdmin, async (req, res) => {
  const date = new Date()
  const lastyear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const userStats = await User.aggregate([
      {$match: {createdAt: {$gte: lastyear}}},
      {
        $project: {
          month: {$month: "$createdAt"}
        }
      },
      {
        $group: { 
          _id: "$month",
          total: {$sum: 1}
        }
      }
    ])
    res.status(200)
    res.json(userStats);
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router;