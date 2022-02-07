import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, MailOutline } from '@material-ui/icons'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column"
  })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1``

const Desc = styled.p`
  margin: 20px 0;
`
const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white:
  background: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    display: "none"
  })}
`
const Title = styled.div`
  margin-bottom: 30px;
  font-weight: 700;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItems = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    background: "#fff8f8"
  })}
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 50%;
`

const Footer = () => {

  return (
    <Container>
      <Left>
        <Logo>Axios</Logo>
        <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet hic id dolore suscipit necessitatibus, 
          dicta deserunt harum fuga.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook/>
          </SocialIcon>

          <SocialIcon color="E44005F">
            <Instagram/>
          </SocialIcon>

          <SocialIcon color="55ACEE">
            <Twitter/>
          </SocialIcon>

          <SocialIcon color="E60023">
            <Pinterest/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Quick Links</Title>
        <List>
          <ListItems>Home</ListItems>
          <ListItems>Cart</ListItems>
          <ListItems>Man Fashion</ListItems>
          <ListItems>Woman Fashion</ListItems>
          <ListItems>Accessories</ListItems>
          <ListItems>My Account</ListItems>
          <ListItems>Order Tracking</ListItems>
          <ListItems>Wishlist</ListItems>
          <ListItems>Terms of Service</ListItems>
          <ListItems>FAQs</ListItems>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight: "10px"}}/> The Red Keep, Kings Landing, Westeros</ContactItem>
        <ContactItem><Phone style={{marginRight: "10px"}}/> +234 070-send-a-raven</ContactItem>
        <ContactItem><MailOutline style={{marginRight: "10px"}}/> thewall@wightwalkers.com</ContactItem>
        <Payment src="http://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer
