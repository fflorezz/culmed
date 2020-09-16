import styled from "styled-components";

const StyledProfileRow = styled.li`
  display: inline-flex;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 4rem;
  .row-avatar {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    margin-right: 4rem;
    width: 10rem;
    min-width: 14rem;
  }
  .row-events {
    display: inline-flex;
    flex-wrap: wrap;
    margin-left: 2rem;
    overflow: hidden;
    max-height: 23rem;
    & > * {
      margin-right: 2rem;
      margin-bottom: 2rem;
      height: 23rem;
      width: 30rem;
    }
    & :last-child {
      margin-right: 0;
    }
  }
`;

export default StyledProfileRow;
