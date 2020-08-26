import React from "react";

import { ReactComponent as LogoSVG } from "../../../assets/svg/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <LogoSVG
        style={{ width: "10.8rem", height: "2rem", cursor: "pointer" }}
      />
    </Link>
  );
};

export default Logo;
