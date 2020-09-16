import styled from "styled-components";
import * as styles from "../../../global-styles";

const StyledFollowingButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  border: 1px solid transparent;
  padding: 0 2rem;
  min-width: ${styles.button.sm.width};
  min-height: ${styles.button.sm.height};
  font: ${styles.button.sm.font};
  background-color: ${styles.colors.white};
  border: 1px solid ${styles.colors.gray};
  color: ${styles.colors.black};
  &:hover {
    background-color: ${styles.colors.gray};
  }
`;

export default StyledFollowingButton;
