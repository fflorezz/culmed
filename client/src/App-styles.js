import { createGlobalStyle } from "styled-components";
import * as styles from "./global-styles";

const AppStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
html {
  font-size: 62.5%;
}
body {
  background-color: ${styles.colors.white};
}
h5{
  font:${styles.font.h5}
}
p{
  font:${styles.font.p}
}
a,
ul,
li {
  text-decoration: none;
  list-style-type: none;
}
`;

export default AppStyles;
