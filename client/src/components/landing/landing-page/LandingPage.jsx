import React from "react";

import Header from "./../../shared/header/Header";
import landingImg from "../../../assets/img/landingbg.jpg";

import StyledLandingPage from "./LandingPage.styles";
import CTA from "./../cta/CTA";

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <Header />
      <img src={landingImg} alt="" />
      <div className="container">
        <CTA />
      </div>
      <div className="gradient"></div>
    </StyledLandingPage>
  );
};

export default LandingPage;
