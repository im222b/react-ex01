import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Btn =styled.button`
  color: white;
  background-color: teal;
  border: 0;
  border-radius: 10px;
`;

function App() {
  return( 
  <Father>
    <Btn>Log in</Btn>
    <Btn as="a" href="/">Log in</Btn>

  </Father>
); 
}

export default App;
