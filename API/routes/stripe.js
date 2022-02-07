const router = require('express').Router()
const stripe = require('stripe')(process.env.STRIPE_KEY);

router.post('/payment', async (req, res) => {
  stripe.charges.create({
    source: req.body.tokenId,
    amount: req.body.amount,
    curreny: "usd"
  }, (error, success) =>{
    if(error) res.status(500).json(error)
    else{
      res.status(200).json(success)
    }
  })
})

module.exports = router;