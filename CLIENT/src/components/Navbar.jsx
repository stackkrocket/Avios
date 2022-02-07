import React from 'react'
import styled from 'styled-components'
import {  Search, ShoppingCartOutlined  } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import {  mobile  } from '../responsive'

//using styled components instead of vanilla CSS
const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "50px"
  })}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
   ${mobile({
    padding: "10px 0px"
  })}
`
/* Left Items on the navbar starts */
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
   ${mobile({
    display: "none"
  })}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 25px;
`

const Input = styled.input`
  border: none;
  outline: none;
   ${mobile({
    width: "50px"
  })}
`

/** Left Items on the navbar ends*/


/** Center Items on the navbar Starts*/
const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
   ${mobile({
    fontSize: "24px"
  })}
`

/** Center Items on the navbar ends*/

/**Right Items on the navbar starts here */

const Right = styled.div`
  flex: 1;
  display: flex;
  align-Items: center;
  justify-content: flex-end;
  margin-left: 25px;
   ${mobile({
    justifyContent: "center",
    flex: 2
  })}
`

const Menu = styled.div`
  font-size: 14px;
  padding-right: 10px;
  cursor: pointer;
   ${mobile({
    fontSize: "12px",
    marginLeft: "10px"
  })}
`

/**Right items on the navbar ends here */


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{color:"gray", fontSize: 16}} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>Axios</Logo>
        </Center>


        <Right>
          <Menu>Register</Menu>
          <Menu>Login</Menu>
          <Menu>
            <Badge badgeConten={4} color="primary">
              <ShoppingCartOutlined/>
            </Badge>
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
