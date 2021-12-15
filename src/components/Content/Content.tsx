import React from "react";
import {
  ContentTitle,
  ContentWrapper,
  Wrapper,
  NavDetails,
  UpperWrapper,
  ToggleText,
  GridContainer,
  BottomTittle,
} from "./styles";
import SwitchButton from "../SwitchButton/SwitchButton";
import { FlexContainer, GraySmallText } from "../../globalStyles";
import { CardBigSection } from "../CardBigSection/CardBigSection";
import { CardSmallSection } from "../CardSmallSection/CardSmallSection";

function Content() {
  return (
    <Wrapper>
      <UpperWrapper />
      <ContentWrapper>
        <NavDetails>
          <div>
            <ContentTitle>Social Media Dashboard</ContentTitle>
            <GraySmallText>Total Followers: 23,004</GraySmallText>
          </div>
          <FlexContainer>
            <ToggleText>Dark Mode</ToggleText>
            <SwitchButton />
          </FlexContainer>
        </NavDetails>
        <GridContainer>
          <CardBigSection />
        </GridContainer>
        <BottomTittle>
          <h3>Overview - Today</h3>
        </BottomTittle>
        <GridContainer>
          <CardSmallSection />
        </GridContainer>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Content;
