import {  useState, useEffect  } from "react"
import styled from "styled-components"
import { trendingProducts } from "../data"
import ProductItem from "./ProductItem"
import axios from "axios"


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = ({cat, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('http://localhost:4400/products')

        setProducts(res.data)
      } catch (error) {}
    }
    getProducts()
  }, [cat])

  useEffect(() => {
    {cat && setFilteredProducts(
      products.filter((item) => Object.entries(filters).every(([key, value]) =>
        item[key].includes(value)
      ))
    )}
  }, [products, cat, filters])

  useEffect(() => {
    if(sort === "newest"){
      setFilteredProducts(prev => 
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
        )
    }else if(sort === "high") {
       setFilteredProducts(prev => 
        [...prev].sort((a, b) => a.price - b.price)
        )
    }else{
       setFilteredProducts(prev => 
        [...prev].sort((a, b) => b.price - a.price)
        )
    }
  }, [sort])

  return (
    <Container>
      {cat ? filteredProducts.map(item => (
        <ProductItem item={item} key={item.id}/>
      )) : products.slice(0, 8).map(item => (
        <ProductItem item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products
