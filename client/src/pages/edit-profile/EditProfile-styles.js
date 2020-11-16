import styled from "styled-components";
import * as styles from "../../global-styles";

const StyledEditProfile = styled.div`
  width: 100%;
  padding: 2rem 6rem;
  border-radius: 0.8rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background-color: ${styles.colors.white};
  position: relative;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
    margin-top: 4rem;
    & h2 {
      margin-bottom: 4rem;
    }
    .imgPicker {
      width: 22rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6rem;
    }
    label {
      font: ${styles.font.p1};
      color: ${styles.colorsDark.gray};
      margin-bottom: 0.5rem;
    }
    input {
      width: 60rem;
      height: 4rem;
      margin-bottom: 4rem;
      padding-left: 1rem;
      border: 1px solid ${styles.colors.gray};
      border-radius: 0.9rem;
      font: ${styles.font.p1};
      color: ${styles.colors.black};
      background-color: ${styles.colorsLight.gray};
    }
    textarea {
      width: 60rem;
      border: 1px solid ${styles.colors.gray};
      border-radius: 0.9rem;
      margin-bottom: 2rem;
      resize: none;
      padding: 1rem 1rem;
      font: ${styles.font.p1};
      color: ${styles.colors.black};
      background-color: ${styles.colorsLight.gray};
      border: 1px solid ${styles.colors.gray};
    }
  }
  .alert-text {
    font: ${styles.font.psm};
    color: ${styles.colorsDark.primary};
    margin-bottom: 1.5rem;
  }
  .error {
    outline-color: ${styles.colorsDark.primary};
    border-color: ${styles.colorsDark.primary};
  }
`;

export default StyledEditProfile;
