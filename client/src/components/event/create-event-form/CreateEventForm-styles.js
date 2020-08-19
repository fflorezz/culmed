import styled from "styled-components";
import * as styles from "../../../global-styles";

const StyledCreateEventForm = styled.div`
  form {
    display: flex;
    justify-content: center;
    padding-top: 6rem;
  }
  .form-text {
    width: 46rem;
    display: inline-flex;
    flex-direction: column;
    label {
      font: ${styles.font.p1};
      color: ${styles.colorsDark.gray};
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    input {
      height: 4rem;
      border: 1px solid ${styles.colors.gray};
      border-radius: 0.9rem;
      margin-bottom: 1rem;
      padding: 0 1rem;
      font: ${styles.font.p1};
      color: ${styles.colors.black};
    }
    textarea {
      border: 1px solid ${styles.colors.gray};
      border-radius: 0.9rem;
      margin-bottom: 1rem;
      resize: none;
      padding: 1rem 1rem;
      font: ${styles.font.p1};
      color: ${styles.colors.black};
    }
    .date {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .field {
        width: 48%;
        display: flex;
        flex-direction: column;
      }
      input {
        font: ${styles.font.psm};
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
    .buttons {
      margin-top: 2rem;
      & :first-child {
        margin-right: 1rem;
      }
    }
  }
`;

export default StyledCreateEventForm;
