import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f7fcf6;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background: white;
  ${mobile({
    width: "75%"
  })}
`
const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #185074;
  margin: 10px 0;
  text-align: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 12px;
  outline:none;
  border: 1px solid #7c7c7c;
`

const Button = styled.button`
  width: 40%;
  border: none;
  background: #185074;
  color: white;
  font-size: 17px;
  padding: 15px 20px;
  letter-spacing: 1.3;
  cursor:pointer;
  margin: 10px 0;
`

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
`

const Login = () => {
  return (
   <Container>
        <Wrapper>
          <Title>Login to your Account</Title>
          <Form>
            <Input placeholder="Email"/>
            <Input placeholder="Password"/>
            <Button>LOGIN</Button>
            <Link>Forgtot Password?</Link>
            <Link>Create A New Account</Link>
          </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
