import styled from "styled-components";
import * as styles from "../../../global-styles";

const StyledAlert = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70rem;
  height: 20rem;
  border-radius: 8px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);
  h5 {
    color: ${styles.colors.black};
    margin-bottom: 1rem;
  }
  p {
    color: ${styles.colorsDark.gray};
    margin-bottom: 2rem;
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    & :first-child {
      margin-right: 1rem;
    }
  }
`;

export default StyledAlert;
