const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userId: {type: String, required: true, unique: true},
  product: [
    {
      productId: {type: String, required: true, unique: true},
      quantity: {type: Number, default: 1}
    }
  ]
  
})

module.exports =  mongoose.model('Cart', cartSchema);