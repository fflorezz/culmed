import styled from "styled-components";
import * as styles from "./../../../global-styles";

export const StyledComponent = styled.button`
  width: ${props => cssValue(props).width};
  height: ${props => cssValue(props).height};
  display: block;
  border: ${props => cssValue(props).border};
  font-size: ${props => cssValue(props).fontSize};
  color: ${props => cssValue(props).color};
  background-color: ${props => cssValue(props).backgroundColor};
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    border: ${props => cssHover(props).border};
    color: ${props => cssHover(props).color};
    background-color: ${props => cssHover(props).backgroundColor};
  }
`;

const cssValue = ({ btnColor, size, outline }) => {
  let backgroundColor = styles.colors[btnColor];
  let color = styles.colors["white"];
  let border = "none";
  let width = styles.button[size].width;
  let height = styles.button[size].height;
  let fontSize = styles.button[size].fontSize;

  if (outline) {
    backgroundColor = "transparent";
    color =
      btnColor === "gray" ? styles.colors["black"] : styles.colors[btnColor];
    border = `1px solid ${styles.colors[btnColor]}`;
  }

  return { backgroundColor, color, border, width, height, fontSize };
};

const cssHover = ({ btnColor, outline }) => {
  let backgroundColor = styles.colorsDark[btnColor];
  let color = styles.colors["white"];
  let border = "none";

  if (outline) {
    backgroundColor = styles.colors[btnColor];
    color = styles.colors["white"];
    border = `1px solid ${styles.colors[btnColor]}`;
  }

  return { backgroundColor, color, border };
};

export default StyledComponent;
