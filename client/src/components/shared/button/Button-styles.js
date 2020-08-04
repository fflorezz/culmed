import styled, { css } from "styled-components";
import * as styles from "../../../global-styles";

const StyledElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  margin-top: 5px;
  border: none;
  padding: 0 15px;
  min-width: ${({ size }) => styles.button[size].width};
  height: ${({ size }) => styles.button[size].height};
  font: ${({ size }) => styles.button[size].font};
  background-color: ${({ btnColor }) => styles.colors[btnColor]};
  color: ${styles.colors["white"]};
  &:hover {
    background-color: ${({ btnColor }) =>
      btnColor === "black" ? "black" : styles.colorsDark[btnColor]};
  }

  ${({ outline }) => outline && outlineButton}
`;

const outlineButton = css`
  background-color: transparent;
  color: ${({ btnColor }) =>
    btnColor === "gray" ? styles.colors["black"] : styles.colors[btnColor]};
  border: 1px solid ${({ btnColor }) => styles.colors[btnColor]};
  &:hover {
    border: none;
    color: ${styles.colors["white"]};
    background-color: ${({ btnColor }) => styles.colors[btnColor]};
  }
`;

export default StyledElement;
