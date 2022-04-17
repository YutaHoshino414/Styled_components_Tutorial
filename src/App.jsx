import styled, {css} from 'styled-components';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Feature from './components/Feature';
import Service from './components/Service';

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Feature/>
        <FeatureShape/>
      </Container>
      <Container>
        <Service />
        <ServiceShape/>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`
const Shape = css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`
const IntroShape = styled.div`
    ${Shape}
    clip-path: polygon(75% 0%, 100% 0%, 100% 100%, 55% 100%);
    background-color: crimson;
`
const FeatureShape = styled.div`
    ${Shape}
    clip-path: polygon(0 0%, 45% 0%, 20% 100%, 0 100%);
    background-color: pink;
`
const ServiceShape = styled.div`
    ${Shape}
    clip-path: polygon(0 0%, 20% 0%, 20% 100%, 0 100%);
    background-color: #1c942c;
`