import styled from 'styled-components';
import Card from './Card'
import woman from '../images/serious-woman.png';

const Serveice = () => {
    return ( 
      <Container>
        <Left>
          <Image src={woman} />
        </Left>
        <Right>
          <Wrapper>
            <Title>Simple process to start</Title>
            <Desc>
                We provide digital experience services to startups and small businesses
                to looking for a partner of their digital media, design & development, 
                lead generation and communications requirements. We work with you, not for you.
                Although we have a great resources
            </Desc>
            <CardContainer>
                <Card/>
                <Card/>
                <Card/>
            </CardContainer>
          </Wrapper>
          
        </Right>
      </Container>
    );
}

export default Serveice;

const Container = styled.div`
    display: flex;
    height: 100vh;
`
const Image = styled.img`
    width:50%;
    position: absolute;
    bottom: 0;
`
const Left = styled.div`
    width: 40%;
`
const Right = styled.div`
    width: 60%;
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    
`
const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #555;
`
const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`