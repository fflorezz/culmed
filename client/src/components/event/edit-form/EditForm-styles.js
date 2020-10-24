import styled from "styled-components";
import * as styles from "../../../global-styles";

const StyledEditForm = styled.div`
  width: 75rem;
  margin: 4rem auto;
  padding-top: 6rem;
  padding-bottom: 6rem;
  background-color: ${styles.colors.white};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  .buttons {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 4rem;
    & button:first-child {
      margin-right: 1rem;
    }
  }
  form {
    width: 45rem;
    margin: 0 auto;
    position: relative;
  }
   .form-text {
    width: 46rem;
    display: inline-flex;
    flex-direction: column;
    label {
      font: ${styles.font.psm};
      color: ${styles.colorsDark.gray};
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    input {
      height: 4rem;
      border: 1px solid ${styles.colors.gray};
      border-radius: 0.9rem;
      margin-bottom: 2rem;
      padding: 0 1rem;
      font: ${styles.font.p1};
      color: ${styles.colors.black};
    }
    textarea {
      border: 1px solid ${styles.colors.gray};
      border-radius: 0.9rem;
      margin-bottom: 2rem;
      resize: none;
      padding: 1rem 1rem;
      font: ${styles.font.p1};
      color: ${styles.colors.black};
    }
    .group {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .field {
        width: 48%;
        display: flex;
        flex-direction: column;
      }
      .date {
        font: ${styles.font.psm};
      }
      input {
        font: ${styles.font.p};
        color: ${styles.colors.black};
      }
    }
    select {
      height: 4rem;
      border: 1px solid ${styles.colors.gray};
      border-radius: 0.9rem;
      margin-bottom: 1rem;
      padding: 0 1rem;
      font: ${styles.font.p1};
      color: ${styles.colors.black};
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

export default StyledEditForm;
