import React from "react";

import landingImg from "../../../assets/img/landingbg.jpg";
import CTA from "./../cta/CTA";

import StyledLandingPage from "./LandingPage.styles";

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <img src={landingImg} alt="" />
      <div className="container">
        <CTA />
      </div>
      <div className="gradient"></div>
    </StyledLandingPage>
  );
};

export default LandingPage;
