import styled from "styled-components";
import * as styles from "../../../global-styles";

const StyledDeleteModal = styled.div`
  position: absolute;
  z-index: 100;
  right: 50%;
  top: -2rem;
  transform: translateX(50%);
  padding: 4rem 1rem 2rem;
  border-radius: 0.8rem;
  background-color: white;
  width: 70rem;
  height: 20rem;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.15);
  text-align: center;
  & h5 {
    font: ${styles.font.h5};
    color: ${styles.colors.black};
    margin-bottom: 1rem;
  }
  & p {
    font: ${styles.font.p};
    color: ${styles.colorsDark.gray};
    margin-bottom: 2rem;
  }
  & .delete-buttons {
    display: flex;
    justify-content: center;
    & button:first-child {
      margin-right: 1rem;
    }
  }
`;

export default StyledDeleteModal;
