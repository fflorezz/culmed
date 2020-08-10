import styled from "styled-components";
import * as styles from "../../../global-styles";

const StyledCTA = styled.div`
  width: 54rem;
  height: 28rem;
  display: inline-flex;
  flex-direction: column;
  h1 {
    line-height: 5rem;
    margin-bottom: 2rem;
    color: ${styles.colors.black};
  }
  h5 {
    color: ${styles.colorsDark.gray};
    font-weight: 400;
    margin-bottom: 4rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    padding: 0 4rem;
    & :first-child {
      margin-right: 1rem;
    }
  }
`;

export default StyledCTA;
