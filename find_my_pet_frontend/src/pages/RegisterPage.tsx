import {
  Control,
  Field,
  Header,
  Label,
  StyledForm,
  StyledMain,
} from "./LoginPage";
import { Formik } from "formik";
import { FormikInput } from "components/UI/Input";
import { MdEmail } from "react-icons/md";
import { HiIdentification, HiKey } from "react-icons/hi";
import { Button } from "components/UI/Button";
import { BsFillTelephoneFill, BsPersonCircle } from "react-icons/bs";
import { useAuth } from "context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

export const Double = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const RegisterPage = () => {
  const navigate = useNavigate();
  const { AuthRegister } = useAuth();
  return (
    <StyledMain>
      <Header>
        <h4>Find my Pet</h4>
      </Header>
      <Formik
        onSubmit={(values) => {
          navigate("/myreports");
          AuthRegister(values);
        }}
        initialValues={{
          password: "",
          email: "",
          phone: "",
          first_name: "",
          last_name: "",
          identification: "",
        }}
      >
        <StyledForm>
          <Field>
            <Label htmlFor="email">Email</Label>
            <FormikInput
              placeholder="user@mail.com"
              name="email"
              type={"email"}
              leftIcon={<MdEmail />}
            />
          </Field>
          <Double>
            <Field>
              <Label htmlFor="first_name">First name</Label>
              <FormikInput
                placeholder="John "
                name="first_name"
                type={"text"}
                leftIcon={<BsPersonCircle />}
              />
            </Field>
            <Field>
              <Label htmlFor="last_name">Last name</Label>
              <FormikInput
                placeholder="Doe"
                name="last_name"
                type={"last_name"}
                leftIcon={<BsPersonCircle />}
              />
            </Field>
          </Double>
          <Double>
            <Field>
              <Label htmlFor="phone">Phone</Label>
              <FormikInput
                placeholder="+51 99999999"
                name="phone"
                type="tel"
                leftIcon={<BsFillTelephoneFill />}
              />
            </Field>
            <Field>
              <Label htmlFor="identification">Identification</Label>
              <FormikInput
                name="identification"
                type={"text"}
                placeholder={"777777777"}
                leftIcon={<HiIdentification />}
              />{" "}
            </Field>
          </Double>
          <Field>
            <Label htmlFor="password">Password</Label>
            <FormikInput
              name="password"
              type={"password"}
              placeholder={"******"}
              leftIcon={<HiKey />}
            />{" "}
          </Field>
          <Control>
            <Button type="submit" block={true}>
              Create Account
            </Button>
            <p>
              Already registered? <Link to="/login">Login with email</Link>{" "}
            </p>
          </Control>
        </StyledForm>
      </Formik>
    </StyledMain>
  );
};
