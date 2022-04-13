import styled from 'styled-components';
import Navbar from './components/Navbar';
import man from './images/avicii-removebg.png';

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        
      </Container>
      
    </div>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
`

const Image = styled.img`
  width:50%
`