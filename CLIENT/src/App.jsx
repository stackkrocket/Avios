import Home from "./pages/Home";
import ProductList from "./pages/ProductList"
import Product from "./pages/Product"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {  BrowserRouter as Router, Routes, Route, Redirect} from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/products/:category" element={<ProductList/>}></Route>
        <Route path="/product/:id" element={<Product/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </Router>
  )
};

export default App; 