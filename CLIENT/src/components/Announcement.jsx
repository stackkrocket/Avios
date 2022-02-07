import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
  height: 30px;
  background: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
   ${mobile({
    alignItems: "center",
    fontSize: "10px",
    textAlign: "center"
  })}
`

const Announcement = () => {
  return (
    <Container>
      Super mega deals on the first Friday of each month. $50 off each purchase!
    </Container>
  )
}

export default Announcement
