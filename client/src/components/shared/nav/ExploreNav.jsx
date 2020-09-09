import React from "react";

import StyledExploreNav from "./ExploreNav-styles";
import FilterDrop from "./../filter-drop/FilterDrop";

const ExploreNav = () => {
  return (
    <StyledExploreNav>
      <ul>
        <li>
          <FilterDrop />
        </li>
      </ul>
    </StyledExploreNav>
  );
};

export default ExploreNav;
