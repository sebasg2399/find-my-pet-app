import styled from "@emotion/styled";
import { colors } from "assets";
import React from "react";

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const Layout = styled.div`
  display: grid;
  grid-template-rows: 4.5rem auto;
  min-height: 100vh;
  overflow: hidden;
  & > main {
    min-height: 100vh;
    padding-top: 4.5rem;
    overflow-y: scroll;
    background-color: ${colors.yellow.light};
  }
`;

export const AppLayout = ({ children }: Props) => {
  return <Layout>{children}</Layout>;
};
