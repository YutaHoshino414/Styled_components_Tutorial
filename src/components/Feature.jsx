import styled from 'styled-components';
import phone from '../images/Apple-iPhone.png';
import AnimateShapes from "./AnimateShapes";

const Feature = () => {
    return ( 
        <Container>
            <Left><Image src={phone}/></Left>
            <Right>
                <Title>
                    Beautiful <b>Design</b><br/>
                    Makes <b>Business</b> 
                </Title>
                <SubTitle>We know that good design means good business</SubTitle>
                <Desc>We help our clients succeed by creating brand identities, digital
                    experiences, and print materials that communicate clearly, achieve
                    marketing goals, and look fantastic.
                </Desc>
                <Desc>We care your business and guarantee you to achieve marketing goals.
                </Desc>
                <Button>Lean More</Button>
                <AnimateShapes/>
            </Right>
        </Container>
     );
}
 
export default Feature;


const Container = styled.div`
    display: flex;
    height: 100vh;
`
const Left = styled.div`
    width: 45%;
`
const Image = styled.img`
    height: 60%;
    position: relative;
    top: 20%;
    left: 15%;
    transform: rotate(-12deg);
`

const Right = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Title = styled.span`
    font-size: 70px;
    line-height: 80px;
`
const SubTitle = styled.span`
    font-size: 24px;
    font-style: italic;
    color: #333;
    margin-top: 10px;
`
const Desc = styled.p`
    width: 80%;
    font-size: 16px;
    color: #777;
    margin-top: 20px;
`
const Button = styled.button`
    width: 150px;
    border-radius: 10px;
    padding: 10px 15px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    border:none;
    margin-top: 30px;
    cursor: pointer;
`