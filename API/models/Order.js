const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: {type: String, required: true, unique: true},
  products: [
    {
      productId: {type: String, required: true, unique: true},
      quantity: {type: Number, default: 1}
    }
  ],
  amount: {type: Number, required: true},
  address: {type: Object, required: true},
  status: {type: String, default: "pending"}
  
})

module.exports =  mongoose.model('Order', orderSchema);