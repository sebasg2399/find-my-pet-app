import styled from "@emotion/styled";
import { PetCard } from "components/PetCard";
import { Button } from "components/UI/Button";
import { usePets } from "context/PetsContext";
import React from "react";
import { Link } from "react-router-dom";

const StyledMain = styled.main``;

const PetsWrapper = styled.div`
  position: relative;
  height: 70%;
  padding: 0 3rem;
  overflow-y: scroll;
`;
const PetsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 6rem;
`;
export const MyPetsPage = () => {
  const { pets } = usePets();
  console.log(pets);
  return (
    <StyledMain>
      <PetsWrapper>
        <PetsList>
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
          <Link to="/mypets/register">
            <Button>Register new pet</Button>
          </Link>
        </PetsList>
      </PetsWrapper>
    </StyledMain>
  );
};
