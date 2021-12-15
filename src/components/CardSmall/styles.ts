import styled from "styled-components";
import { darkCardBg, desaturatedBlurText, limeGreen } from "../../common";

interface BodyProps {
  percentColor?: string;
}

const CardSmallStyled = styled.div`
  height: 8rem;
  width: 16.5rem;
  max-width: 16.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border-radius: 5px;
  background-color: ${darkCardBg};
  transition: all 0.5s ease-in;

  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;

const CardHeader = styled.div`
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${desaturatedBlurText};
  font-size: 0.8rem;
  font-weight: 700;
`;

const CardBody = styled.div<BodyProps>`
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h4 {
    color: #fff;
    font-size: 2rem;
  }

  div {
    display: flex;
    align-items: center;

    span {
      margin-left: 0.2rem;
      font-size: 0.9rem;
      font-weight: 700;
      color: ${(props) => props.percentColor || `${limeGreen}`};
    }
  }
`;

export { CardSmallStyled, CardHeader, CardBody };
