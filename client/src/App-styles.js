import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import * as styles from "./global-styles";

const AppStyles = createGlobalStyle`
${normalize}

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
h1{
  font:${styles.font.h1}
}
h2{
  font:${styles.font.h2}
}
h3{
  font:${styles.font.h3}
}
h4{
  font:${styles.font.h4}
}
h5{
  font:${styles.font.h5}
}
h6{
  font:${styles.font.h6}
}
p{
  font:${styles.font.p1}
}
a,
ul,
li {
  text-decoration: none;
  list-style-type: none;
}
`;

export default AppStyles;
