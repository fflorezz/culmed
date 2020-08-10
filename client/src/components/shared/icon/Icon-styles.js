import styled from "styled-components";
import * as styles from "../../../global-styles";

const StyledIcon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  svg {
    height: ${({ size }) =>
      size ? styles.icon.size[size] : styles.icon["md"]};
    margin: 0;
    path {
      fill: ${({ color }) =>
        color ? styles.colors[color] : styles.colorsDark.gray};
    }
  }
`;

export default StyledIcon;
