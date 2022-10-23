import styled from "@emotion/styled";
import { usePets } from "context/PetsContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pet } from "context/PetsContext/PetsContext";
import { colors, shadows } from "assets";
import { MapView } from "components/MapView";
import { Marker } from "mapbox-gl";
import { Input, TextArea } from "components/UI/Input";
import { Control, Field, Label } from "pages/LoginPage";
import { Button } from "components/UI/Button";

const StyledMain = styled.main`
  /* margin-bottom: 2rem; */
  padding-top: 2rem !important;
  /* height: 50% !important; */
  display: flex;

  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
  align-items: center;
  background-color: ${colors.yellow.light};
  max-height: 100vh;
  overflow-y: scroll;
`;

const PetImage = styled.img`
  width: 9rem;
  border-radius: 1rem;
  box-shadow: ${shadows.elevation1};
  filter: grayscale(0.8);
`;
const MessageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
`;
export const ReportRegister = () => {
  const { pets, findPet } = usePets();
  const [pet, setPet]: [Pet | undefined, any] = useState<Pet | undefined>(
    undefined
  );
  const [formValues, setFormValues] = useState({ date: new Date().toJSON() });
  const { pet_id } = useParams();
  const [pos, setPos] = useState<any>(null);
  useEffect(() => {
    if (pet_id) {
      const auxPet = findPet(parseInt(pet_id));
      if (auxPet) {
        setPet(auxPet);
      }
    }
  }, [pets, pet_id]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log(pos.coords.latitude);
        setPos({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      () => {
        setPos({ lat: -14.085788040358821, lng: -75.72870871418027 });
      }
    );
  }, []);

  if (!pet) {
    return <div>Pet not found</div>;
  }
  if (!pos) {
    return <div>Cargando posicion</div>;
  }

  return (
    <StyledMain>
      <PetImage src={pet.photo_url} alt="Pet to report" />
      <MapView
        pos={pos}
        photo_url={pet.photo_url}
        onChange={(marker: Marker) => {
          const { lat, lng } = marker.getLngLat();
          setFormValues((prev) => ({ ...prev, lat, lng }));
        }}
      />
      <MessageContainer>
        <Label>Mensaje</Label>
        <TextArea
          onChange={(e) => {
            setFormValues((prev) => ({ ...prev, message: e.target.value }));
          }}
        />
        <Label>Ultima vez visto</Label>
        <Input
          onChange={(e) => {
            setFormValues((prev) => ({ ...prev, date: e.target.value }));
          }}
          type="datetime-local"
        />
      </MessageContainer>

      <Button onClick={() => console.log(formValues)}>Enviar</Button>
    </StyledMain>
  );
};
