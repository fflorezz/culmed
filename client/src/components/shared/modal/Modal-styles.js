import styled from "styled-components";

const StyledModal = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.8);

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;

export default StyledModal;
