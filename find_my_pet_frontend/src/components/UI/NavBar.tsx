import styled from "@emotion/styled";
import { colors, fonts } from "assets";
import { useAuth } from "context/AuthContext";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { SideBar } from "./SideBar";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  color: white;
  /* background-color: ${colors.yellow.regular}; */
  background-color: ${colors.gray.dark};
  & > h5 {
    font-family: ${fonts.secondary};
    font-size: 1.25rem;
    color: white;
  }
  & svg {
    color: white;
  }
`;

export const NavBar = () => {
  const [active, toggle] = useState(false);
  return (
    <StyledNav>
      <HiOutlineMenu onClick={() => toggle(true)} />
      <h5>My Pets</h5>
      <p>?</p>
      <SideBar active={active} toggle={toggle} />
    </StyledNav>
  );
};
