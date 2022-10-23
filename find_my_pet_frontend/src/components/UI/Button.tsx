import styled from "@emotion/styled";
import { colors, fonts, shadows, typography } from "assets";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
}
const StyledButton = styled.button<ButtonProps>`
  border: none;
  outline: none;
  padding: 0.5rem 2rem;
  background-color: ${colors.gray.regular};
  background-color: ${colors.brown.light};
  color: white;
  color: ${colors.yellow.light};
  /* color: #ffffff; */
  /* font-weight: 500; */
  border-radius: 1rem;
  text-transform: uppercase;
  ${typography.regular.button}
  font-family: ${fonts.primary};
  box-shadow: ${shadows.elevation1};
  ${(props) => props.block || "width: 100%;"}
`;
export const Button = ({ block, children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
