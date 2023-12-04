import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
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

const Text = styled.span`
  
  font-size: 35px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  animation:${animation} 2s linear infinite;
  ${Text} {
    color: white;
    &:hover{
      font-size:  60px;
      
    }
  }
`;

function App() {
  return( 
    <Wrapper>
      <Box >
        <Text as="p">B</Text>
      </Box>
      <Text>A</Text>
    </Wrapper>
); 
}

export default App;
