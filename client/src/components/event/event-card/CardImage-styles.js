import styled from "styled-components";
import * as styles from "../../../global-styles.js";

const StyledImage = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 100%;
  overflow: hidden;

  @media only screen and (min-width: 320px) {
    height: 60vw;
  }
  @media only screen and (min-width: 640px) {
    height: 30vw;
  }
  @media only screen and (min-width: 950px) {
    height: 20vw;
  }
  @media only screen and (min-width: 1200px) {
    height: 15vw;
  }
  @media only screen and (min-width: 1550px) {
    height: 12vw;
  }
  @media only screen and (min-width: 1850px) {
    height: 10vw;
  }

  &:hover {
    .date-tag {
      p {
        font-size: 1.8rem;
        transition: all 150ms ease-in;
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }
  .date-tag {
    opacity: 1;
    position: absolute;
    top: 10%;
    right: 0;
    display: inline-block;
    padding: 0.2rem 1rem;
    background-color: ${styles.colorsDark.secondary};
    p {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${styles.colors.white};
      transition: all 150ms ease-in;
    }
  }
  .title {
    background-color: black;
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    z-index: 1;
    transform: translateY(-102%);
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
