import styled from "styled-components";
import {
  darkCardBg,
  darkToggle,
  desaturatedBlurText,
  facebook,
  instagram,
  limeGreen,
} from "../../common";

interface CardProps {
  topCardBorderBg?: string;
}

interface FooterProps {
  footerColor?: string;
}

const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 15rem;
  width: 16.5rem;
  max-width: 16.5rem;
  border: 4px solid transparent;
  border-radius: 5px;
  background-image: linear-gradient(${darkCardBg}, ${darkCardBg}),
    radial-gradient(
      circle at top left,
      ${(props) => props.topCardBorderBg || `${facebook}, ${facebook}`}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
  background-color: ${darkCardBg};
  transition: all 0.5s ease-in;

  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;

const CardHeader = styled.div`
  color: ${desaturatedBlurText};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;

  span {
    margin-left: 0.5rem;
  }
`;

const CardBody = styled.div`
  margin: 1.2rem 0;
  text-align: center;

  h2 {
    font-size: 4rem;
    color: #fff;
  }

  span {
    color: ${desaturatedBlurText};
    font-size: 0.8rem;
    letter-spacing: 5px;
  }
`;

const CardFooter = styled.div<FooterProps>`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 0.8rem;
  color: ${(props) => props.footerColor || `${limeGreen}`};

  span {
    margin-left: 0.3rem;
  }
`;

export { Card, CardHeader, CardBody, CardFooter };
