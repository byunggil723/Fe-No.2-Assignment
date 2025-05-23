import styled from 'styled-components';
import Router from '@/shared/Router';

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
  return <Router />;
}

export default App;
