import styled from "@emotion/styled";
import { colors, fonts, shadows, typography } from "assets";
import React from "react";
import { HiKey } from "react-icons/hi";
import { FormikInput, Input } from "../components/UI/Input";
import { Formik, Form } from "formik";
import { MdEmail } from "react-icons/md";
import { Button } from "../components/UI/Button";
import { useAuth } from "context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
export const StyledMain = styled.main`
  background-color: ${colors.yellow.light};
  height: 600px;
  max-height: 600px;
  /* padding: 2rem; */
  overflow: hidden;
  border-radius: 1rem;
  width: 70%;
  display: flex;
  flex-flow: column;
  box-shadow: ${shadows.elevation1};
`;
export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: ${colors.yellow.regular};
  justify-content: center;
  & h4 {
    font-family: ${fonts.pacific};
    /* color: #9e5f00; */
    color: ${colors.brown.regular};
    /* color: #773605; */
  }
`;
export const Label = styled.label`
  ${typography.regular.overline}
  text-transform: uppercase;
`;
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 1.5rem;
  flex-grow: 1;
  overflow-y: scroll;
`;
const Title = styled.h5`
  /* font-family: ${fonts.pacific}; */
  /* color: #9d2d1f; */
`;
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const Control = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1rem;
  & p {
    font-size: 12px;
    /* width: 80px; */
  }
`;
export const LoginPage = () => {
  const { AuthLogin } = useAuth();
  const navigate = useNavigate()
  return (
    <StyledMain>
      <Header>
        <h4>Find my Pet</h4>
      </Header>
      <Formik
        onSubmit={(values) => {
          navigate("/home");
          AuthLogin(values);
        }}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        <StyledForm style={{ paddingTop: "5rem" }}>
          <Field>
            <Label htmlFor="email">Email</Label>
            <FormikInput
              placeholder="user@mail.com"
              name="email"
              type={"email"}
              leftIcon={<MdEmail />}
            />
          </Field>
          <Field>
            <Label htmlFor="password">Password</Label>
            <FormikInput
              name="password"
              type={"password"}
              placeholder={"******"}
              leftIcon={<HiKey />}
            />
          </Field>
          <Control>
            <Button type="submit" block={true}>
              Login
            </Button>
            <p>Not registered yet? <Link to="/register">Create an account</Link> </p>
          </Control>
        </StyledForm>
      </Formik>
    </StyledMain>
  );
};
