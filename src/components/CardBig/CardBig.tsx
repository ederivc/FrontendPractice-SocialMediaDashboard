import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "./styles";

interface CardBigProps {
  headerIcon: any;
  headerText: string;
  bodyNumber: string;
  bodyText: string;
  footerIcon: any;
  footerText: string;
  topCardBorderBg?: string;
  footerColor?: string;
}

function CardBig({
  headerIcon,
  headerText,
  bodyNumber,
  bodyText,
  footerIcon,
  footerText,
  topCardBorderBg,
  footerColor,
}: CardBigProps) {
  return (
    <Card topCardBorderBg={topCardBorderBg}>
      <CardHeader>
        <img src={headerIcon} alt="header-icon" />
        <span>{headerText}</span>
      </CardHeader>
      <CardBody>
        <h2>{bodyNumber}</h2>
        <span>{bodyText}</span>
      </CardBody>
      <CardFooter footerColor={footerColor}>
        <img src={footerIcon} alt="footer-icon" />
        <span>{footerText}</span>
      </CardFooter>
    </Card>
  );
}

export default CardBig;
