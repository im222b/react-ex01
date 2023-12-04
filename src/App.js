import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    
    border-radius: 100px;
  }
  100%{
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  animation:${animation} 2s linear infinite;
  span {
    color: white;
    font-size: 35px;
    &:hover{
      font-size:  60px;
    }
    &:active{
      opacity:  0;
    }
  }
`;

function App() {
  return( 
    <Wrapper>
      <Box >
        <span>B</span>
      </Box>
    </Wrapper>
); 
}

export default App;
