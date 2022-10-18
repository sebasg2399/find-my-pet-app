import styled from "@emotion/styled";
import { PetCard } from "components/PetCard";
import { usePets } from "context/PetsContext";
import React from "react";

const StyledMain = styled.main`
  padding: 0 3rem;
`;

export const MyPetsPage = () => {
  const { pets } = usePets();
  console.log(pets);
  return (
    <StyledMain>
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </StyledMain>
  );
};
