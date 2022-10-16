import styled from "@emotion/styled";
import { colors, fonts, shadows } from "assets";
import React from "react";

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
  color: white;
  background-color: ${colors.yellow.regular};
  justify-content: center;
  & h4{
    font-family: ${fonts.pacific};
  }
`;
export const LoginPage = () => {
  return (
    <StyledMain>
      <Header>
        <h4>Find my Pet</h4>
      </Header>
    </StyledMain>
  );
};
