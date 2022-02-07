import styled from "styled-components"
import { trendingProducts } from "../data"
import ProductItem from "./ProductItem"


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = () => {
  return (
    <Container>
      {trendingProducts.map(item => (
        <ProductItem item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products
