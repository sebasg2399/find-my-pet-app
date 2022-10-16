import styled from "@emotion/styled";
import { colors, fonts, shadows } from "assets";
import React from "react";
import { HiKey } from "react-icons/hi";
import { Input } from "../components/UI/Input";

const StyledMain = styled.main`
  background-color: ${colors.yellow.light};
  min-height: 600px;
  /* padding: 2rem; */
  border-radius: 1rem;
  width: 70%;
  box-shadow: ${shadows.elevation1};
`;
const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: ${colors.yellow.regular};
  justify-content: center;
  & h4 {
    font-family: ${fonts.pacific};
    color: white;
  }
`;
export const LoginPage = () => {
  return (
    <StyledMain>
      <Header>
        <h4>Find my Pet</h4>
      </Header>
      <form action="">
        <Input type={"password"} leftIcon={<HiKey />} />
      </form>
    </StyledMain>
  );
};
