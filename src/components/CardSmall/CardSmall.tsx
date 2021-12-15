import React from "react";
import { brightRed } from "../../common";
import { IMAGES } from "../../helpers/images";
import { CardBody, CardHeader, CardSmallStyled } from "./styles";

interface CardSmallProps {
  headerText: string;
  headerIcon: any;
  bodyText: string;
  bodyNumbers: string;
  bodyIcon?: any;
  percentColor?: string;
}

function CardSmall({
  headerText,
  headerIcon,
  bodyText,
  bodyNumbers,
  bodyIcon,
  percentColor,
}: CardSmallProps) {
  return (
    <CardSmallStyled>
      <CardHeader>
        <span>{headerText}</span>
        <img src={headerIcon} alt="header-icon" />
      </CardHeader>
      <CardBody percentColor={percentColor}>
        <h4>{bodyText}</h4>
        <div>
          <img src={bodyIcon ? bodyIcon : IMAGES.iconUp} alt="" />
          <span>{bodyNumbers}</span>
        </div>
      </CardBody>
    </CardSmallStyled>
  );
}

export { CardSmall };
