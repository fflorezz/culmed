import styled from "styled-components";

const StyledModal = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  .closeBtn {
    position: absolute;
    right: 2rem;
    top: 1rem;
    opacity: 0.7;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
`;

export default StyledModal;
