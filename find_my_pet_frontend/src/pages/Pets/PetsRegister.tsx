import styled from "@emotion/styled";
import { Formik } from "formik";
import { Control, StyledForm } from "pages/LoginPage";
import { Field, Label } from "../LoginPage";
import { FormikInput } from "components/UI/Input";
import { MdPets } from "react-icons/md";
import { BiCurrentLocation, BiTime } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";
import { BsGenderAmbiguous } from "react-icons/bs";
import { GiWeight } from "react-icons/gi";
import { Button } from "components/UI/Button";
import { usePets } from "context/PetsContext";
import { Double } from "pages/RegisterPage";

const StyledMain = styled.main`
  /* margin-bottom: 2rem; */
  padding-top: 2rem !important;
  /* height: 50% !important; */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
  align-items: center;
  & form {
    overflow-y: scroll;
    width: 100%;
    max-height: 80%;
  }
`;

export const PetsRegister = () => {
  const { addPet } = usePets();
  return (
    <StyledMain>
      <Formik
        initialValues={{
          name: "",
          age: 0,
          breed: "",
          color: "",
          sex: "",
          weight: 0,
          address: "",
          photo_url: "",
        }}
        onSubmit={(values) => {
          addPet(values);
        }}
      >
        <StyledForm>
          <Double>
            <Field>
              <Label htmlFor="name">Nombre</Label>
              <FormikInput
                placeholder="Firulais"
                leftIcon={<MdPets />}
                name="name"
              />
            </Field>
            <Field>
              <Label htmlFor="age">Edad</Label>
              <FormikInput
                placeholder="7"
                type={"number"}
                leftIcon={<BiTime />}
                name="age"
              />
            </Field>
          </Double>
          <Double>
            <Field>
              <Label htmlFor="breed">Raza</Label>
              <FormikInput
                placeholder="Perro Chitzu"
                leftIcon={<MdPets />}
                name="breed"
              />
            </Field>
            <Field>
              <Label htmlFor="color">Color</Label>
              <FormikInput
                placeholder="Blanco"
                leftIcon={<IoIosColorPalette />}
                name="color"
              />
            </Field>
          </Double>
          <Double>
          <Field>
            <Label htmlFor="sex">Sexo</Label>
            <FormikInput
              placeholder="Macho o hembra"
              leftIcon={<BsGenderAmbiguous />}
              name="sex"
            />
          </Field>
          <Field>
            <Label htmlFor="weight">Peso</Label>
            <FormikInput
              placeholder="7.7"
              leftIcon={<GiWeight />}
              name="weight"
              type={"number"}
            />
          </Field>
          </Double>
          <Field>
            <Label htmlFor="address">Direccion</Label>
            <FormikInput
              placeholder="Urb Los Proceres L7"
              leftIcon={<BiCurrentLocation />}
              name="address"
            />
          </Field>
          <Field>
            <Label htmlFor="photo_url">Url de Photo</Label>
            <FormikInput
              placeholder="url"
              leftIcon={<BiCurrentLocation />}
              name="photo_url"
            />
          </Field>
          <Control>
            <Button type="submit">Register pet</Button>
          </Control>
        </StyledForm>
      </Formik>
    </StyledMain>
  );
};
