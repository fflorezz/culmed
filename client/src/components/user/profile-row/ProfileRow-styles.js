import styled from "styled-components";

const StyledProfileRow = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 4rem;
  .row-avatar {
    display: inline-flex;
    flex-direction: column;
    margin-right: 4rem;
    min-width: 14rem;
  }
  .row-events {
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    overflow: hidden;
    max-height: 16.6rem;
    & > * {
      margin-right: 2rem;
      margin-bottom: 2rem;
      height: 100%;
      width: 25rem;
    }
    & :last-child {
      margin-right: 0;
    }
  }
`;

export default StyledProfileRow;
