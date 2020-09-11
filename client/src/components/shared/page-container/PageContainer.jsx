import React from "react";

import StyledPageContainer from "./PageContainer-styles";

const PageContainer = ({ children }) => {
  return <StyledPageContainer>{children}</StyledPageContainer>;
};

export default PageContainer;
