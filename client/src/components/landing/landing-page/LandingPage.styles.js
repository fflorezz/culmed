import styled from "styled-components";
import StyledCTA from "./../cta/CTA-styles";

const StyledLandingPage = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  top: 6rem;
  height: calc(100vh - 6rem);
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 125%;
    height: 140%;
    object-fit: cover;
    transform: scaleX(-1);
  }
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 128rem;
    margin: 0 auto;
    ${StyledCTA} {
      position: absolute;
      top: 30%;
      left: 3%;
    }
  }
  .gradient {
    position: absolute;
    top: 0;
    z-index: -1;
    height: 100vh;
    width: 80vw;
    background: linear-gradient(
      to right,
      rgba(240, 240, 240, 1) 0%,
      rgba(239, 239, 239, 1) 60%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export default StyledLandingPage;
