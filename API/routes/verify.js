const jwt = require('jsonwebtoken');

//verify json web token assigned to user before further request processing
const verifyToken = async (req, res, next) =>  {
  const authHeader = req.headers.token;
  //check for authentication headers
  if(authHeader) {
    //take only the token from the header
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
      if (error) {
        res.status(402);
        res.json("We no sabi this your token Oga boss! Try get new One!!!");
      }
      //set the user
      req.user = user;
      next();
    });
  }else{
    return res.status(401).json("Na lie o! We no know you oooooo.....");
  }
}

//authorize the token the user has passed
const authorizeToken = (req, res, next) => {
  verifyToken(req, res, () => {
     if(req.user.id === req.params.id || req.user.isAdmin)  {
          next();
    }else{
      res.status(403)
      res.json("If you like, call presido. If your token no correct, we no go allow you move!!!")
    }
  })
}


//If the user gets here, it has to be authenticated with the provided token and also check if te user is the admin: eg for products
const authorizeAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
     if(req.user.isAdmin)  {
          next();
    }else{
      res.status(403)
      res.json("No be you get this product wey you wan access so oo. Better go back!!!...")
    }
  })
}

module.exports = {  verifyToken, authorizeToken, authorizeAdmin }