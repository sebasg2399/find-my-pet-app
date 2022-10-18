import styled from "@emotion/styled";
import { colors, shadows } from "assets";
import { Pet } from "context/PetsContext/PetsContext";
import React from "react";

type Props = {
  pet: Pet;
};
const StyledPetCard = styled.div`
  position: relative;
  background-color: ${colors.gray.dark};
  box-shadow: ${shadows.elevation1};
  border-radius: 1rem;
  width: 100%;
  height: 150px;
  overflow: hidden;
  /* padding: 1rem; */
`;
const Img = styled.img`
  position: absolute;
  left: -25px;

  top: 0;
  /* border: 2px solid white; */
  box-shadow: ${shadows.elevation1};
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 0 50% 50% 0;
`;

export const PetCard = ({ pet }: Props) => {
  return (
    <StyledPetCard>
      <Img src={pet.album[0].img_url} alt="" />
      {/* <div>XD</div> */}
    </StyledPetCard>
  );
};
