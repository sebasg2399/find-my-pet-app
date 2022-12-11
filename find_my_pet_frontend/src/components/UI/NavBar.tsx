import styled from "@emotion/styled";
import { colors, fonts, shadows } from "assets";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { SideBar } from "./SideBar";

const StyledNav = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 2rem;
  /* background-color: ${colors.yellow.regular}; */
  /* background-color: ${colors.gray.dark}; */
  background-color: #1b1b1b;
  box-shadow: ${shadows.elevation1};
  position: fixed;
  bottom: -300px;
  left: -50%;
  width: 200%;
  border-radius: 50%;
  height: 400px;
  z-index: 10;
  color: white;
  & > h5 {
    font-family: ${fonts.pacific};
    font-size: 2rem;
    color: white;
  }
  & svg {
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
