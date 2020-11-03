import styled from "styled-components";
import * as styles from "../../../global-styles";

const StyledDrop = styled.div`
  width: 8rem;
  padding: 1rem 2rem;
  background-color: ${styles.colors.white};
  border-radius: 0.5rem;
  border: 1px solid ${styles.colors.gray};
  & button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  & a,
  button {
    display: block;
    padding: 0.5rem 0;
    font: 500 1.2rem roboto, sans-serif;
    color: ${styles.colorsDark.gray};
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid ${styles.colors.complementary};
      border-top: 1px solid ${styles.colors.complementary};
    }
  }
`;

export default StyledDrop;
