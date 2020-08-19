import styled from "styled-components";
import * as styles from "../../../global-styles";
import bgImg from "../../../assets/img/medellin-gallery-2018-7-1600x1066.jpg";

const StyledRegistrationPage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url(${bgImg});
  background-size: cover;
  display: flex;
  justify-content: space-between;
  padding: 4rem 14rem;
  .text {
    display: flex;
    flex-direction: column;
    color: ${styles.colors.white};
  }
`;

export default StyledRegistrationPage;
