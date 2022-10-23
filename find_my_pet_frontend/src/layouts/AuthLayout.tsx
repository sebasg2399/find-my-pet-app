import styled from "@emotion/styled";
import React from "react";
import DogsCollage from "assets/images/perritos.jpg";
interface Props {
  children?: JSX.Element | JSX.Element[];
}

const Layout = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  & > main {
    position: relative;
    z-index: 15;
    /* background-color: white; */
  }
  & .cover {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${DogsCollage});
    filter: brightness(65%) blur(2px);
    /* filter: ; */
    background-size: contain;
  }
`;

export const AuthLayout = ({ children }: Props) => {
  return (
    <Layout>
      <div className="cover"></div>
      {children}
    </Layout>
  );
};
