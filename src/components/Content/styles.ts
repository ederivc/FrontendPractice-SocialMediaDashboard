import styled from "styled-components";
import { veryDarkBlueBg, veryDarkBlueTopBg, whiteText } from "../../common";

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${veryDarkBlueBg};
  position: relative;
  display: flex;
  justify-content: center;
`;

const UpperWrapper = styled.div`
  height: 250px;
  width: 100%;
  background-color: ${veryDarkBlueTopBg};
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  position: absolute;
  top: 0;
`;

const ContentWrapper = styled.div`
  border: 1px solid red;
  position: absolute;
  top: 4rem;
  width: 1200px;
`;

const NavDetails = styled.div`
  padding: 0 0.5rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentTitle = styled.p`
  color: ${whiteText};
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.2px;
  margin-bottom: 0.3rem;
`;

const ToggleText = styled.span`
  color: ${whiteText};
  font-size: 14px;
  font-weight: 700;
`;

const GridContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(10rem, 310px));
  justify-content: center;
  justify-items: center;
  align-items: center;
  gap: 1rem;
`;

export {
  Wrapper,
  UpperWrapper,
  ContentWrapper,
  NavDetails,
  ContentTitle,
  ToggleText,
  GridContainer,
};
