import styled from "styled-components";

const StyledGridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 3rem;
`;

export default StyledGridContainer;
