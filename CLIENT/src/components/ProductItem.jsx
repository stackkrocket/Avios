import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"
import {mobile} from '../responsive'

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(104, 104, 104, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-item: center;
  justify-content: center;
  background: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
    cursor: pointer;
  }
`
const Circle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: white;
  position: absolute;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  z-index: 2;
  ${mobile({
    height: "30vh"
  })}
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease-in-out;


  &:hover{
    background: #e9f5f5;
    transform: scale(1.1);
    cursor: pointer;
  }
`

const ProductItem = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.image}/>
      <Info>
        <Icon>
          <ShoppingCartOutlined/>
        </Icon>

        <Icon>
          <SearchOutlined/>
        </Icon>

        <Icon>
          <FavoriteBorderOutlined/>
        </Icon>
      </Info>
    </Container>
  )
}

export default ProductItem
