import styled from "styled-components";
import * as styles from "../../../global-styles";
import StyledDrop from "./../../user/profile-drop/ProfileDrop-styles";

const StyledHeader = styled.header`
  width: 100%;
  height: 6rem;
  background-color: ${styles.colorsLight.gray};
  border-bottom: 1px solid ${styles.colors.gray};
  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    height: 100%;
    margin: 0 auto;
    .user {
      height: 100%;
      display: flex;
      align-items: center;
      & > * {
        margin-left: 1rem;
      }
      .avatar-hover {
        position: relative;
        z-index: 999;
        height: 100%;
        display: flex;
        align-items: center;
      }
      ${StyledDrop} {
        position: absolute;
        top: 5.5rem;
        right: 0;
      }
    }
  }
`;

export default StyledHeader;
