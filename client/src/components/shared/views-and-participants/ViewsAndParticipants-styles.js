import styled from "styled-components";
import * as styles from "../../../global-styles";

const StyledViews = styled.div`
  display: inline-flex;
  .views,
  .participants {
    display: inline-flex;
    p {
      color: ${styles.colorsDark.gray};
      font-weight: 500;
      font-size: 1.2rem;
    }
  }
`;
export default StyledViews;
