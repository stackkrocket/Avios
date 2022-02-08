import styled from 'styled-components'
import {mobile} from '../responsive'
import {Link} from 'react-router-dom'

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 60vh;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({
    height: "30vh"
  })}
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 2;
  background: rgba(0,0,0, 0.5);
`
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`
const Button = styled.button`
  border: none;
  font-size: 17px;
  padding: 15px;
  cursor: pointer;
  background: white;
  color: #102004;
  font-weight: 600;
  transition: all 0.5s ease-in-out;

  &:hover{
    background: none;
    border: 2px solid white;
    color: white;
    transform: scale(1.1);
  }
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop Now</Button>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem
