import React, { useContext } from 'react';
import styled from 'styled-components';
import SelectedCard from './SelectedCard';
import pokeBall from '@/assets/pokeBall.svg';
import { SelectedPokemonContext } from '@/context/SelectedPokemonContext';

const StyledDashboard = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-color: white;
  border-width: 2px;
  border-style: solid;
  border-radius: 20px;
  margin-top: 3%;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 500;
  color: white;
  margin-top: 1%;
`;

const Container = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: row;
  margin-top: 1%;
  margin-bottom: 1.6%;
  gap: 2%;
`;

const Slot = styled.img`
  width: 15%;
  aspect-ratio: 1 / 1;
  border-color: white;
  border-width: 2px;
  border-style: dashed;
  border-radius: 12px;
`;

const Dashboard = () => {
  const { selectedPokemon } = useContext(SelectedPokemonContext);
  return (
    <StyledDashboard>
      <Title>Select your pokemon!</Title>
      <Container>
        {selectedPokemon.map((item, index) => {
          if (item !== undefined) {
            return <SelectedCard key={index} index={index} />;
          } else {
            return <Slot key={index} src={pokeBall} />;
          }
        })}
      </Container>
    </StyledDashboard>
  );
};

export default Dashboard;
