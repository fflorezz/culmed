import styled from "styled-components";
import * as styles from "../../../global-styles";

const StyledProfileNav = styled.nav`
  width: 100%;
  padding: 0 4rem;
  margin: 1rem auto 0;
  display: flex;
  flex-direction: column;
  padding-bottom: 0.5rem;
  .profile {
    margin-top: 2rem;
    display: flex;
    .userInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .name {
        font: ${styles.avatar.lg.name};
        color: ${styles.colors.black};
        margin-bottom: 0.5rem;
        margin-left: 0.5rem;
      }
      .follow {
        margin-left: 0.5rem;
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        color: ${styles.colorsDark.gray};
        span {
          font-weight: 700;
        }
        .spacer {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          margin: 0 0.5rem;
          background-color: ${styles.colorsDark.gray};
        }
      }
    }
  }
  ul {
    display: flex;
    margin: 4rem 0 0;
    padding-bottom: 1rem;
    width: 100%;
    border-bottom: 1px solid ${styles.colorsLight.gray};
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

export default StyledProfileNav;
