import styled from "styled-components";
import * as styles from "../../../global-styles";
import StyledElement from "./../../shared/button/Button-styles";

const StyledRegistrationForm = styled.div`
  width: 55rem;
  padding: 2rem 6rem;
  border-radius: 0.8rem;
  display: inline-flex;
  flex-direction: column;
  background-color: ${styles.colors.white};
  h2 {
    margin-top: 8rem;
    margin-bottom: 4rem;
  }
  .login {
    font: ${styles.font.p2};
    color: ${styles.colorsDark.gray};
    text-align: right;
    span {
      color: ${styles.colors.secondary};
      cursor: pointer;
    }
  }
  form {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8rem;
    label {
      font: ${styles.font.p1};
      color: ${styles.colorsDark.gray};
      margin-bottom: 0.5rem;
    }
    input {
      width: 40rem;
      height: 4rem;
      border: 1px solid ${styles.colorsDark.gray};
      border-radius: 0.9rem;
      margin-bottom: 1rem;
    }
    ${StyledElement} {
      margin-top: 2rem;
    }
  }
  .politics {
    font: ${styles.font.psm};
    color: ${styles.colorsDark.gray};
    span {
      color: ${styles.colors.black};
      font-weight: 700;
    }
  }
`;

export default StyledRegistrationForm;
