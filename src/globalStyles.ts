import { desaturatedBlurText, whiteText } from "./common";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Poppins:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700;900&display=swap');
    font-family: 'Inter', sans-serif;
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto', sans-serif;

    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const CardTitle = styled.h2`
  font-size: 2rem;
  color: ${whiteText};
`;

const CardTitleSmall = styled.h3`
  font-size: 1.5rem;
  color: ${whiteText};
`;

const GraySmallText = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${desaturatedBlurText};
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  GlobalStyles,
  CardTitle,
  CardTitleSmall,
  GraySmallText,
  FlexContainer,
};
