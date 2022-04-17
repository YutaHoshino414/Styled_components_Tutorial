import styled from 'styled-components';


const Card = () => {
    return ( 
        <Container>
            <Image/>
            <Text>
                Lorem ipsum dolor sit amet consectetur.
            </Text>
        </Container>
     );
}
 
export default Card;

const Container = styled.div`
    width: 120px;
    padding: 20px;
    display: flex;
    flex-direction: column;
`
const Image = styled.img`
    width: 20px;
`
const Text = styled.span`
    
`