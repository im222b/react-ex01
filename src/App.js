import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColer};
  height: 100px;
  width: 100px;
`;

const Circle = styled(Box)`
  border-radius : 50px;
`;

const Text = styled.h2`
  color: white;
  text-align: center;
`;

function App() {
  return( 
  <Father>
    <Box bgColer="teal">
      <Text>Hello</Text>
    </Box>
    <Circle bgColer="tomato"/>
  </Father>
); 
}

export default App;
