import styled from "styled-components";
import * as styles from "../../../global-styles";

const StyledNav = styled.nav`
  width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${styles.colorsLight.gray};
  ul {
    display: flex;
  }
  a {
    width: 9rem;
    height: 3.3rem;
    padding: 1rem;
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
