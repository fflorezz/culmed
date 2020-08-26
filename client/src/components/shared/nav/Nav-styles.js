import styled from "styled-components";
import * as styles from "../../../global-styles";

const StyledNav = styled.nav`
  width: 100%;
  max-width: 140rem;
  padding: 0 4rem;
  margin: 2rem auto 0;
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${styles.colorsLight.gray};
  ul {
    display: flex;
  }
  a {
    min-width: 9rem;
    height: 3.3rem;
    padding: 1rem 1.5rem;
    margin-right: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font: 500 1.4rem roboto, sans-serif;
    color: ${styles.colorsDark.gray};
    border: 1px solid transparent;
    border-radius: 5rem;

    &:hover {
      border: 1px solid ${styles.colors.gray};
    }
  }
`;

export default StyledNav;
