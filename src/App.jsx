import styled from 'styled-components';

const StBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: green;
  border-radius: 20px;
  font-size: 20px;
  color: white;
`;

function App() {
  return (
    <>
      <StBox>텍스트</StBox>
    </>
  );
}

export default App;
