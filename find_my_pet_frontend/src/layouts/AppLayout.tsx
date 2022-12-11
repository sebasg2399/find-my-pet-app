import styled from "@emotion/styled";
import React from "react";

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const Layout = styled.div`
  /* display: grid;
  grid-template-rows: 100px auto;
  min-height: 100vh;
  overflow: hidden; */
`;

export const AppLayout = ({ children }: Props) => {
  return <Layout>{children}</Layout>;
};
