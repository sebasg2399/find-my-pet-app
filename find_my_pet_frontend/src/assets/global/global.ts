import { css } from "@emotion/react";
import { colors } from "assets/colors";
import { typography } from "assets/typography";
import { fonts } from "../fonts";
export const global = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${fonts.secondary};
  }
  #root {
    font-size: 1rem;
    height: 100%;
    line-height: 1.5rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fonts.secondary};
  }
  h1 {
    ${typography.regular.headline1}
  }
  h2 {
    ${typography.regular.headline2}
  }
  h3 {
    ${typography.regular.headline3}
  }
  h4 {
    ${typography.regular.headline4}
  }
  h5 {
    ${typography.regular.headline5}
  }
  h6 {
    ${typography.regular.headline6}
  }
  svg {
    font-size: 1.25rem;
  }
`;
