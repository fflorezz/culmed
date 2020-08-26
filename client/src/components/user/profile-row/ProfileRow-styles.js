import styled from "styled-components";

const StyledProfileRow = styled.div`
  & .following-events {
    margin: 0 auto;
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    grid-gap: 3rem;
  }
`;

export default StyledProfileRow;
