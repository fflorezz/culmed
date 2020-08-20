import styled from "styled-components";
import * as styles from "../../../global-styles";

const StyledCommentField = styled.div`
  display: flex;
  align-items: flex-start;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 5%;
    textarea {
      width: 100%;
      resize: none;
      margin-bottom: 1rem;
      border: 1px solid ${styles.colors.gray};
      background-color: ${styles.colors.white};
      border-radius: 0.9rem;
      padding: 1rem 1rem;
      font: ${styles.font.p2};
      color: ${styles.colorsDark.gray};
    }
  }
`;

export default StyledCommentField;
