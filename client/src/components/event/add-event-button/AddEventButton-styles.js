import styled from "styled-components";
import * as styles from "../../../global-styles";
import StyledIcon from "./../../shared/icon/Icon-styles";

const StyledAddEventButton = styled.div`
  ${StyledIcon} {
    cursor: pointer;
    &:hover {
      path {
        fill: ${styles.colorsDark.primary};
      }
    }
  }
`;

export default StyledAddEventButton;
