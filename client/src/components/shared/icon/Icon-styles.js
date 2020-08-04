import styled from "styled-components";
import * as styles from "../../../global-styles";

const StyledIcon = styled.div`
  display: inline;
  svg {
    height: ${({ size }) =>
      size ? styles.icon.size[size] : styles.icon["md"]};
    path {
      fill: ${({ color }) =>
        color ? styles.colors[color] : styles.colorsDark.gray};
    }
  }
`;

export default StyledIcon;
