import styled from "styled-components";
import * as styles from "../../../global-styles";

const StyledTags = styled.div`
  border-bottom: 1px solid ${styles.colorsLight.gray};
  padding-bottom: 4rem;
  display: flex;
  p {
    font: ${styles.font.p2};
    margin-right: 1rem;
    color: ${styles.colorsLight.primary};
  }
`;

export default StyledTags;
