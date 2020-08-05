import styled from "styled-components";
import * as styles from "../../../global-styles.js";

const StyledImage = styled.div`
  position: relative;
  width: 30rem;
  display: inline-block;
  img {
    width: 100%;
    height: 21.5rem;
    object-fit: cover;
    border-radius: 0.5rem;
  }
  .date-tag {
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
    background-color: black;
    position: absolute;
    width: 100%;
    top: 21.5rem;
    left: 0;
    transform: translateY(-100%);
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
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
