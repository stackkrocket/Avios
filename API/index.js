const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const port = process.env.PORT || 4400;

//User defined modules and config goes here
app.use(bodyParser.json());
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
const orderRoute = require('./routes/order')
const cartRoute = require('./routes/cart')
const stripeRoute = require('./routes/stripe')
app.use(productRoute);
app.use(authRoute);
app.use(userRoute);
app.use(orderRoute)
app.use(cartRoute)
app.use(stripeRoute);
app.use(cors());

//User defined modules and config ends here

dotenv.config();

//mongoose connection to database
const uri = process.env.MONGODB_URL;
mongoose.connect(uri, {
  useNewUrlParser: true
}).then(() => console.log(`Connected successfully to mongoDB cluster`))
.catch((error) => console.error(error));

//mongoose connection config ends here

app.get('/', (req, res) => {
  res.send('hello there!')
})


app.listen(port, () => {
  console.log(`Server started on port number: ${port}`);
})