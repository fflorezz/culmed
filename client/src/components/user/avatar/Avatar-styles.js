import styled, { css } from "styled-components";
import * as styles from "../../../global-styles";

const StyledAvatar = styled.div`
  display: inline-flex;
  align-items: center;
  img {
    object-fit: cover;
    border-radius: 50%;
    width: ${({ size }) => styles.avatar[size].img};
    height: ${({ size }) => styles.avatar[size].img};
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  .name {
    font: ${({ size }) => styles.avatar[size].name};
  }
  .follow {
    font: ${({ size }) => styles.avatar[size].follow};
  }
  ${({ size }) =>
    (size === "sm" && small) ||
    (size === "lg" && large) ||
    (size === "md" && medium)}
`;

const small = css`
  img {
    margin-right: 0.5rem;
  }
  .name {
    color: ${styles.colorsDark.gray};
  }
  .follow {
    display: none;
  }
`;

const medium = css`
  .name {
    display: none;
  }
  .follow {
    display: none;
  }
`;

const large = css`
  img {
    margin-right: 1rem;
  }
  .name {
    color: ${styles.colors.black};
  }
  .follow {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    color: ${styles.colorsDark.gray};
    span {
      font-weight: 700;
    }
    .spacer {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      margin: 0 0.5rem;
      background-color: ${styles.colorsDark.gray};
    }
  }
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
      text-align: center;
      align-items: center;
      img {
        margin-right: 0;
      }
      .follow {
        display: none;
      }
    `}
`;

export default StyledAvatar;
