import styled from "@emotion/styled";
import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { colors, shadows } from "assets";
import { useField } from "formik";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: JSX.Element;
}
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  leftIcon?: JSX.Element;
}
const InputContainer = styled.div`
  background-color: white;
  /* padding: 0.5rem 1rem; */
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: ${shadows.elevation1};
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
  z-index: 0;
  backdrop-filter: blur(1px);
  & svg {
    font-size: 1rem;
    /* padding: 0.5rem; */
  }
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 100%;
  background-color: #f3f3f3;
  border-right: 2px solid ${colors.gray.shallow};
`;
const StyledInput = styled.input<InputProps>`
  background-color: white;
  border: none;
  outline: none;
  font-size: 10px;
  width: 50%;
  padding: 0.25rem 0.25rem;
  z-index: 1;
  flex-grow: 1;
`;
const StyledTextArea = styled.textarea`
  background-color: white;
  border: none;
  outline: none;
  font-size: 10px;
  width: 100%;
  padding: 0.5rem 1rem;
  z-index: 1;
  flex-grow: 1;
`;
export const Input = ({ leftIcon, ...props }: InputProps) => {
  return (
    <InputContainer>
      {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
      <StyledInput {...props} />
    </InputContainer>
  );
};

export const FormikInput = ({ ...props }: InputProps) => {
  const [field] = useField(props as any);
  return <Input {...field} {...props} />;
};

export const TextArea = ({ leftIcon, ...props }: TextAreaProps) => {
  return (
    <InputContainer>
      {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
      <StyledTextArea {...props} />
    </InputContainer>
  );
};
