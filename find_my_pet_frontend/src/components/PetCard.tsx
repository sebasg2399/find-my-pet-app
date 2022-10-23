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
  width: 100%;
  height: 160px;
  overflow: hidden;
  z-index: 0;
  display: flex;
  /* padding: 1rem; */
`;
const Img = styled.img`
  position: relative;
  /* border: 2px solid white; */
  box-shadow: ${shadows.elevation1};
  /* width: 120px; */
  /* height: 120px; */
  width: 80px;
  height: 100px;
  object-fit: cover;
  border-radius: 1rem;
  /* border-radius: 50%; */
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 1rem;
  /* text-decoration: underline; */
  /* flex-grow: 1; */
  /* justify-content: center; */
  gap: 0.15rem;
  & h6 {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-transform: capitalize;
  }
`;
const Presentation = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & h6 {
    font-size: 16px;
    text-transform: capitalize;
    text-align: center;
  }
`;
const Control = styled.div`
  position: absolute;
  right: 0;
  padding: 0.5rem;
`;
export const PetCard = ({ pet }: Props) => {
  return (
    <StyledPetCard>
      <Presentation>
        <Img src={pet.photo_url} alt="" />
        <h6>{pet.name}</h6>
      </Presentation>
      <Content>
        <h6>
          Edad: <b>{pet.age} años </b>
        </h6>
        <h6>
          Raza: <b>{pet.breed} </b>
        </h6>
        <h6>
          Sexo: <b>{pet.sex === "Male" ? "Macho" : "Hembra"}</b>
        </h6>
        <h6>
          Pelo: <b>{pet.color} </b>
        </h6>
        <h6>
          Peso: <b>{pet.weight} kg </b>
        </h6>
        <h6>
          Direccion: <b>{pet.address}</b>{" "}
        </h6>
      </Content>
      <Control>
        <Link to={`/myreports/register/${pet.id}`}>
          <MdReport />
        </Link>
        <IoMdTrash />
      </Control>
    </StyledPetCard>
  );
};
