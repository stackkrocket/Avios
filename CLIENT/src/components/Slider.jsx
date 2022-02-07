import React, { useEffect, useState  } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import {  sliderItems } from '../data';
import {  mobile  } from '../responsive'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
   ${mobile({
    display: "none"
  })}
`

const Arrow = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-contents: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * (-100)}vw);
  transition: all 1.5s ease;
`
const Slides = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: #${props=> props.bg};
`

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`
const Image = styled.img`
  height: 80%;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 50px;
`

const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

const Button = styled.button`
  padding: 20px;
  font-size: 17px;
  font-weight: 600;
  background: teal;
  cursor: pointer;
  color: white;
  border: none;
`


const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    //if the arrow direction clicked is left
    if(direction === "left")  {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }else{
      setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}> 
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slides bg={item.bg} key={item.id}>
          <ImageContainer>
          <Image src={item.img}/>
        </ImageContainer>

        <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
          <Button>Buy Now</Button>
        </InfoContainer>
        </Slides>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
