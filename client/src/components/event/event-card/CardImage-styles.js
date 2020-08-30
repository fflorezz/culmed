import styled from "styled-components";
import * as styles from "../../../global-styles.js";

const StyledImage = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 100%;
  &:hover {
    .date-tag,
    .title {
      opacity: 1;
    }
  }
  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-radius: 0.8rem;
  }
  .date-tag {
    opacity: 0;

    position: absolute;
    top: 10%;
    right: 0;
    display: inline-block;
    padding: 0.2rem 1rem;
    background-color: ${styles.colors.secondary};
    p {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${styles.colors.white};
    }
  }
  .title {
    opacity: 0;

    background-color: black;
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    z-index: 1;
    transform: translateY(-104%);
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    padding: 0.8rem 1rem;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 30%,
      rgba(255, 255, 255, 0) 100%
    );
    p {
      color: ${styles.colors.white};
      font-size: 1.6rem;
      font-weight: 700;
    }
  }
`;

export default StyledImage;
