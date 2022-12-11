import styled from "@emotion/styled";
import { colors, shadows } from "assets";
import { Pet } from "context/PetsContext/PetsContext";
import { IoMdTrash } from "react-icons/io";
import { MdReport } from "react-icons/md";
import { Link } from "react-router-dom";

type Props = {
  pet: Pet;
};
const StyledPetCard = styled.div`
  position: relative;
  /* background-color: ${colors.brown.light}; */
  background-color: #e6efee;
  box-shadow: ${shadows.elevation1};
  border-radius: 1rem;
  overflow: hidden;
  z-index: 0;
  display: flex;
  /* padding: 1rem; */
`;
export const PetCard = ({ pet }: Props) => {
  return (
    <StyledPetCard>
        <img src={pet.photo_url} alt="" />
    </StyledPetCard>
  );
};
