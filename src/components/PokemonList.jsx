import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PokemonCard from './PokemonCard';
import MOCK_DATA from '../../mock';
import { PokemonContext } from '@/context/PokemonContext';

const StyledPokemonList = styled.div`
  width: 95%;
  height: 40vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  margin-top: 1.5%;
  gap: 2%;
`;

const PokemonList = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    let result = [];
    let tempArr = [];
    for (let i = 1; i <= MOCK_DATA.length; i++) {
      if (i % 6 !== 0) {
        tempArr.push(MOCK_DATA[i - 1]);
      } else {
        tempArr.push(MOCK_DATA[i - 1]);
        result.push(tempArr);
        tempArr = [];
      }
    }
    result.push(tempArr);
    tempArr = [];
    setArr(result);
  }, []);

  return (
    <PokemonContext.Provider value={{ arr }}>
      {arr.map((itemBundle, i) => {
        return (
          <StyledPokemonList key={i}>
            {itemBundle.map((_, j) => (
              <PokemonCard key={j} row={i} column={j} />
            ))}
          </StyledPokemonList>
        );
      })}
    </PokemonContext.Provider>
  );
};

export default PokemonList;
