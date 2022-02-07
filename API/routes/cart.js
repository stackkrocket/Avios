const router = require('express').Router();
const Cart = require('../models/Cart');
const { verifyToken, authorizeToken, authorizeAdmin } = require('./verify');


//create a Product
router.post('/cart', verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save()
    res.status(200)
    res.json(savedCart)    
  } catch (error) {
    res.status(500).json(error) 
  }
})

//update Products
router.put('/cart/update/:id', authorizeToken, async (req, res) => {
   try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {new: true})

    res.status(200)
    res.json(updatedCart);

  }catch(error) {
    res.status(500);
    res.json(error);
  }
})

//delete a cart

//delete a product
router.delete('/cart/delete/:id', authorizeToken, async (req, res) =>{
   try {
    const deletedCart = await Cart.findByIdAndDelete(req.params.id)
    res.status(200)
    res.json(`This user with username: ${deletedCart} has been deleted`)

  } catch (error) {
    res.status(500)
    res.json(error)
  }
})

//get user Cart
router.get('/cart/:id', authorizeToken, async (req, res) =>{
try {
    const cart = await Cart.findOne({userId: req.params.id});
    res.status(200)
    res.json(cart);

  } catch (error) {
    res.status(500)
    res.json(error);
  }
})

//get all carts of users
router.get('/', authorizeAdmin, async (req, res) =>{
  try {
    const carts = Cart.find()
    res.status(200)
    res.json(carts)
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;