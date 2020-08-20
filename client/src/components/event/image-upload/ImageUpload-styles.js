import styled from "styled-components";
import * as styles from "../../../global-styles";
import StyledIcon from "../../shared/icon/Icon-styles";

const StyledImageUpload = styled.div`
  cursor: pointer;
  width: 46rem;
  height: 32rem;
  border: 0.1rem dashed ${styles.colors.primary};
  border-radius: 1rem;
  background-color: ${styles.colorsLight.gray};
  color: ${styles.colorsDark.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 6rem;
  margin-top: 2rem;
  padding-top: 6rem;
   p{
      color:${styles.colors.primary};
    }
  ${StyledIcon} {
    svg {
      transform: scale(3) translateY(-50%);
      path {
        fill: ${styles.colors.primary};
      }
    }
  }
  &:hover{
    border: 0.1rem dashed ${styles.colorsDark.primary};
    p{
      color:${styles.colorsDark.primary};
    }
    svg {
     path {
        fill: ${styles.colorsDark.primary};
      }
    }
  }
  }
`;

export default StyledImageUpload;
