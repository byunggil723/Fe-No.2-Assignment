import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledPokemonCard = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-color: white;
  border-width: 2px;
  border-style: solid;
  border-radius: 20px;
`;

const PokemonImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-bottom: 2px solid white;
`;

const Name = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-top: 3%;
`;

const Number = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 300;
  color: white;
`;

const AddButton = styled.button`
  width: 100%;
  height: 10%;
  background-color: red;
  font-size: 15px;
  font-weight: 300;
  color: white;
  border: none;
  outline: none;
  box-shadow: none;
  margin-top: 2%;
  &:hover {
    background-color: #a80000;
  }
`;

const PokemonCard = ({
  imgUrl,
  name,
  id,
  selectedPokemon,
  setSelectedPokemon,
}) => {
  const navigate = useNavigate();
  return (
    <StyledPokemonCard>
      <PokemonImage
        src={imgUrl}
        onClick={() => navigate(`/dex/detail/${id}`)}
      />
      <Name>{name}</Name>
      <Number>No.{id}</Number>
      <AddButton
        onClick={() => {
          if (!selectedPokemon.some((item) => item === undefined)) {
            alert('더 이상 선택할 수 없습니다.');
          } else if (!selectedPokemon.some((item) => item?.id === id)) {
            const obj = {
              img_url: imgUrl,
              korean_name: name,
              id: id,
            };
            const index = selectedPokemon.indexOf(undefined);
            selectedPokemon.splice(index, 1, obj);
            const tempArr = [...selectedPokemon];
            setSelectedPokemon(tempArr);
          } else {
            alert('이미 선택된 포켓몬입니다.');
          }
        }}
      >
        추가
      </AddButton>
    </StyledPokemonCard>
  );
};

export default PokemonCard;
