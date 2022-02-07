import { Add, Remove, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive"

const Container = styled.div``
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    padding: "10px",
    flexDirection: "column"
  })}
`
const ImageContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  width: 90%;
  height: 55vh;
  object-fit: cover;
  ${mobile({
    height: "40vh",
    width: "100%"
  })}
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({
    padding: "10px"
  })}
`
const Title = styled.h1`
  fon-weight: 300;
`
const Description = styled.p`
  margin: 20px 0;
`
const Price = styled.span`
  font-weight: 200;
  font-size: 20px;
`

const FilterContainer = styled.div`
  margin: 30px 0;
  width: 50%;
  display: flex;
  justify-content: space-between;
  ${mobile({
    width: "100%"
  })}
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;

`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: none;
  margin: 0 5px;
  cursor: pointer;
  border: 2px solid ${props=> props.color};
`
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  cursor: pointer;
  outline: none;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    width: "100%"
  })}
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  cursor: pointer;
`
const Button = styled.button`
  border: 1.78px solid teal;
  background: white;
  padding: 18px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;


  &:hover{
    transform: scale(1.1);
    background: teal;
    color: white;
  }
`

const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImageContainer>
          <Image src="https://images.pexels.com/photos/1078973/pexels-photo-1078973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
        </ImageContainer>
        <InfoContainer>
          <Title>Casual Summer Wear</Title>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, eaque?</Description>
          <Price>$ 200</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="skyblue"></FilterColor>
              <FilterColor color="orange"></FilterColor>
            </Filter>

            <Filter>
              <FilterTitle>Size: </FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{cursor: "pointer"}}/>
              <Amount>1</Amount>
              <Add style={{cursor: "pointer"}}/>
            </AmountContainer>
            <Button>Add To Cart <ShoppingCartOutlined style={{marginLeft: "5px"}}/></Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
