const router = require('express').Router();
const Product = require('../models/Product');
const { verifyToken, authorizeToken, authorizeAdmin } = require('./verify');


//create a Product
router.post('/products/add', authorizeAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save()
    res.status(200)
    res.json(savedProduct)    
  } catch (error) {
    res.status(500).json(error) 
  }
})

//update Products
router.put('/products/update/:id', authorizeAdmin, async (req, res) => {
   try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {new: true})

    res.status(200)
    res.json(updatedProduct);

  }catch(error) {
    res.status(500);
    res.json(error);
  }
})

//delete a product
router.delete('/products/delete/:id', async (req, res) =>{
   try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    res.status(200)
    res.json(`This user with username: ${deletedProduct} has been deleted`)

  } catch (error) {
    res.status(500)
    res.json(error)
  }
})

//get a Product
router.get('/products/:id', async (req, res) =>{
try {
    const product = await Product.findById(req.params.id)
    res.status(200)
    res.json(product);

  } catch (error) {
    res.status(500)
    res.json(error);
  }
})

//get all Products
router.get('/products', async (req, res) => {
  try {
     const queryStringNew = req.query.new;
     const queryStringCategories = req.query.categories;
   
    let product;
    if(queryStringNew){
      product = await Product.find().sort({createdAt: -1}).limit(1)
    }else if(queryStringCategories){
      product  = await Product.find({categories: {
        $in: [queryStringCategories] 
      }})
    }else{
      product = await Product.find();
    }
    res.status(200)
    res.json(product)

  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;