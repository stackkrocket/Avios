import {Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import {mobile} from '../responsive'

const Container = styled.div``
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({
    padding: "10px"
  })}
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button`
  padding: 17px;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
`

const TopTexts = styled.div`
  ${mobile({
    display: "none"
  })}
`

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px; 
  font-size: 14px;
  letter-spacing: 1.73px;
  font-weight: 500;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column"
  })}
`

const Info = styled.div`
  flex: 3;
`
const Summary = styled.div`
  flex: 1;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`
const SummaryTitle = styled.span`
  font-weight: 500;
  font-size: 25px;
  text-transform: uppercase;
`
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props)=> props.type === "total" && "500"};
  font-size: ${(props)=> props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`
  text-transform: uppercase;
`
const SummaryItemPrice = styled.span``
const Button = styled.button`
  width: 100%;
  padding: 15px;
  color: white;
  background: teal;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  border: none;
  outline: none;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
   ${mobile({
    flexDirection: "column"
  })}
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 240px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction:column;
  justify-content: space-around;
   ${mobile({
    padding: "10px 3px"
  })}
`
const ProductName = styled.span`
   ${mobile({
    fontSize: "14px"
  })}
`
const ProductID = styled.span``
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props=> props.color};
`
const ProductSize = styled.span`
  font-size: 15px;
`
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
   ${mobile({
    margin: "5px 15px"
  })}
`
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
   ${mobile({
    marginBottom: "30px"
  })}
`

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>

      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton style={{background: "teal", border: "none", color: "white"}}>Configure Item</TopButton>
          <TopTexts>
            <TopText>Shopping Cart (2)</TopText>
            <TopText>Wishlist (0)</TopText>
          </TopTexts>
          <TopButton style={{background: "none", border: "1.78px solid teal", color: "teal"}}>Continue shopping</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                <Details>
                  <ProductName><b>Product: </b> Summer Wear</ProductName>
                  <ProductID><b>ID: </b> RTX-1002</ProductID>
                  <ProductColor color="black"/>
                  <ProductSize><b>Size: </b> XL-42.4</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add/>
                  <ProductAmount>2</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>$ 200</ProductPrice>
              </PriceDetail>
            </Product>

            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/58592/pexels-photo-58592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                <Details>
                  <ProductName><b>Product: </b> Vintage Wear</ProductName>
                  <ProductID><b>ID: </b> RTX-10023-WER123-00X5</ProductID>
                  <ProductColor color="red"/>
                  <ProductSize><b>Size: </b> L - 38</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add/>
                  <ProductAmount>2</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>$ 200</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem style={{fontSize: "14px", fontWeight: "600", opacity: "0.6"}}>
              <SummaryItemText>Sub-Total</SummaryItemText>
              <SummaryItemPrice>$ 50</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem style={{fontSize: "14px", fontWeight: "600", opacity: "0.6"}}>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 10</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem style={{fontSize: "14px", fontWeight: "600", opacity: "0.6"}}>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>$ -10</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 50</SummaryItemPrice>
            </SummaryItem>
            <Button>Proceed to checkout</Button>
          </Summary>
        </Bottom>

        
      </Wrapper>

      <Footer/>
    </Container>
  )
}

export default Cart
