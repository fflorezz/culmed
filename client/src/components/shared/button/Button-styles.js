import styled, { css } from "styled-components";
import * as styles from "../../../global-styles";

const StyledElement = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  border: 1px solid transparent;
  /* margin-top: 5px; */
  padding: 0 2rem;
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
    border: 1px solid transparent;
    color: ${({ btnColor }) =>
      btnColor === "gray" ? styles.colors["black"] : styles.colors["white"]};
    background-color: ${({ btnColor }) => styles.colors[btnColor]};
  }
`;

export default StyledElement;
