const router = require('express').Router();
const Order = require('../models/Order');
const { verifyToken, authorizeToken, authorizeAdmin } = require('./verify');


//create a Product
router.post('/order', verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save()
    res.status(200)
    res.json(savedOrder)    
  } catch (error) {
    res.status(500).json(error) 
  }
})

//update Products
router.put('/order/update/:id', authorizeAdmin, async (req, res) => {
   try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {new: true})

    res.status(200)
    res.json(updatedOrder);

  }catch(error) {
    res.status(500);
    res.json(error);
  }
})

//delete a cart

//delete a product
router.delete('/order/delete/:id', authorizeAdmin, async (req, res) =>{
   try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id)
    res.status(200)
    res.json(`This user with username: ${deletedOrder} has been deleted`)

  } catch (error) {
    res.status(500)
    res.json(error)
  }
})

//get user Cart
router.get('/order/:id', authorizeToken, async (req, res) =>{
try {
    const orders = await Order.find({userId: req.params.id});
    res.status(200)
    res.json(orders);

  } catch (error) {
    res.status(500)
    res.json(error);
  }
})

//get all orders of users
router.get('/', authorizeAdmin, async (req, res) =>{
  try {
    const orders = Order.find()
    res.status(200)
    res.json(orders)
  } catch (error) {
    res.status(500).json(error);
  }
})

router.get('/revenue', authorizeAdmin, async (req, res) =>{
  const date = new Date();
  const lastmonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousmonth = new Date(new Date().setMonth(lastmonth.getMonth() - 1));

  try {
    const revenue = await Order.aggregate([
      {
        $match: {
          createdAt: {
            $gte: previousmonth
          }
        }
      }, 
      {
        $project: {
          month: {$month: "$createdAt"},
          sales: "$amount"
        },
      },
      {
        $group: {
          _id: "$month",
          total: {$sum: "$sales"}
        }
      }
    ])
    res.status(200).json(revenue); 
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router;