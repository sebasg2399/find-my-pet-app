import styled from "@emotion/styled";
import React, { InputHTMLAttributes } from "react";
import { shadows } from "assets";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

const InputContainer = styled.div`
  background-color: transparent;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${shadows.elevation1};
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 0;
  backdrop-filter: blur(1px);
`;

const StyledInput = styled.input<InputProps>`
  background-color: transparent;
  border: none;
  outline: none;
  z-index: 1;
`;

export const Input = ({ leftIcon, ...props }: InputProps) => {
  return (
    <InputContainer>
      {leftIcon!}
      <StyledInput {...props} />
    </InputContainer>
  );
};
