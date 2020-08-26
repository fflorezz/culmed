import styled from "styled-components";
import * as styles from "../../../global-styles";

const StyledFilter = styled.div`
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  .select {
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    min-width: 10.5rem;
    height: 3.3rem;
    margin-right: 1rem;
    padding: 0 0.5rem;
    border: 1px solid ${styles.colors.gray};
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover {
      border-width: 0.2rem;
    }
    p {
      font: 500 1.4rem roboto, sans-serif;
      color: ${styles.colorsDark.gray};
    }
    svg {
      transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
      transition: transform 300ms ease-in;
    }
  }
  .options {
    position: absolute;
    top: 3.5rem;
    display: inline-flex;
    flex-direction: column;
    margin-top: 1rem;
    min-width: 10.5rem;
    padding: 1rem 1rem;
    border: 1px solid ${styles.colors.gray};
    border-radius: 0.5rem;
    background-color: ${styles.colors.white};
    p {
      padding: 0.5rem 0;
      font: 500 1.2rem roboto, sans-serif;
      color: ${styles.colorsDark.gray};
      border-bottom: 1px solid transparent;
      border-top: 1px solid transparent;
      cursor: pointer;
      &:hover {
        border-bottom: 1px solid ${styles.colorsLight.complementary};
        border-top: 1px solid ${styles.colorsLight.complementary};
      }
    }
  }
`;

export default StyledFilter;
