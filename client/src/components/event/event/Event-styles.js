import styled from "styled-components";
import * as styles from "../../../global-styles";
import StyledIcon from "./../../shared/icon/Icon-styles";
import StyledAvatar from "./../../user/avatar/Avatar-styles";
import StyledTags from "./../tags/Tags-styles";
import StyledAddEventButton from "./../add-event-button/AddEventButton-styles";

const StyledEvent = styled.main`
  width: 75rem;
  margin: 4rem auto;
  padding-top: 6rem;
  padding-bottom: 6rem;
  background-color: ${styles.colors.white};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  .buttons {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 4rem;
    & button:first-child {
      margin-right: 1rem;
    }
  }
  .event-body {
    width: 45rem;
    margin: 0 auto;
    position: relative;
  }
  ${StyledAddEventButton} {
    position: absolute;
    top: 0;
    right: 0;
  }
  h4 {
    margin-bottom: 1.5rem;
  }
  .date {
    font: ${styles.font.p1};
    font-weight: 700;
    margin-bottom: 0.6rem;
  }
  .time,
  .location {
    font: ${styles.font.p2};
    color: ${styles.colorsDark.gray};
    margin-bottom: 0.4rem;
  }
  .image {
    display: flex;
    width: 100%;
    position: relative;
    margin-top: 1.5rem;
    img {
      width: 100%;
    }
    & .image-info {
      position: absolute;
      width: 100%;
      height: 5rem;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0) 20%,
        rgba(0, 0, 0, 0.3) 100%
      );
    }
    .price {
      position: absolute;
      top: 1rem;
      left: 1rem;
      font: ${styles.font.p1};
      color: ${styles.colors.white};
      font-weight: 700;
    }
    ${StyledIcon} {
      position: absolute;
      top: 0.5rem;
      right: 1.5rem;
      z-index: 2;
    }
  }
  .user-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    ${StyledAvatar} {
      margin-top: 0.5rem;
    }
  }
  .description {
    font: ${styles.font.p2};
    color: ${styles.colorsDark.gray};
    margin-bottom: 1rem;
  }
  ${StyledTags} {
    margin-bottom: 2rem;
  }
`;

export default StyledEvent;
