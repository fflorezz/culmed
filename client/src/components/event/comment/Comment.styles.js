import styled from "styled-components";
import * as styles from "../../../global-styles";

const StyledComment = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 3rem;
  &:hover {
    .close-button {
      visibility: visible;
    }
  }
  .info {
    display: flex;
    align-items: flex-end;
    margin-bottom: 0.2rem;
    .name {
      font: ${styles.font.p2};
      color: ${styles.colors.black};
      font-weight: 700;
      margin-right: 1rem;
    }
    .date {
      font: ${styles.font.psm};
      font-size: 1.1rem;
      color: ${styles.colors.gray};
      margin-bottom: 0.25rem;
    }
  }
  .comment {
    width: 35rem;
    font: ${styles.font.p2};
    color: ${styles.colorsDark.gray};
  }
  .close-button {
    padding: 0.5rem;
    cursor: pointer;
    visibility: hidden;
    font-size: 1.1rem;
    color: ${styles.colorsDark.gray};
  }
`;

export default StyledComment;
