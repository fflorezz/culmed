import styled from "styled-components";
import * as styles from "../../../global-styles";
import StyledIcon from "../../shared/icon/Icon-styles";

export const StyledImagePlaceholder = styled.div`
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
  p {
    color: ${styles.colors.primary};
  }
  ${StyledIcon} {
    svg {
      transform: scale(3) translateY(-50%);
      path {
        fill: ${styles.colors.primary};
      }
    }
  }
  &:hover {
    border: 0.1rem dashed ${styles.colorsDark.primary};
    p {
      color: ${styles.colorsDark.primary};
    }
    svg {
      path {
        fill: ${styles.colorsDark.primary};
      }
    }
  }
`;

export const StyledImagePreview = styled.div`
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
  padding: 0.5rem;
  cursor: pointer;
  & .img-area {
    height: 30rem;
    width: 44rem;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & img {
    max-height: 100%;
    display: block;
  }
  & .delete {
    height: 30rem;
    width: 44rem;
    background-color: black;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font: ${styles.font.h4};
    color: ${styles.colors.white};
    border-radius: 0.5rem;
    position: absolute;
    transition: all 300ms ease-in-out;
  }
  &:hover {
    .delete {
      opacity: 0.8;
      transition: all 200ms ease-in-out;
    }
  }
`;
