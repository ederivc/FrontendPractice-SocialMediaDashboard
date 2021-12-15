import React from "react";
import { brightRed, instagramTopBg, youTubeTopBg } from "../../common";
import { FlexContainer, GraySmallText } from "../../globalStyles";
import { IMAGES } from "../../helpers/images";
import CardBig from "../CardBig/CardBig";
import SwitchButton from "../SwitchButton/SwitchButton";
import {
  ContentTitle,
  ContentWrapper,
  Wrapper,
  NavDetails,
  UpperWrapper,
  ToggleText,
  GridContainer,
} from "./styles";

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
          <CardBig
            headerIcon={IMAGES.iconFacebook}
            headerText="@nathanf"
            bodyNumber="1987"
            bodyText="FOLLOWERS"
            footerIcon={IMAGES.iconUp}
            footerText="12 Today"
          />
          <CardBig
            headerIcon={IMAGES.iconTwitter}
            headerText="@nathanf"
            bodyNumber="1044"
            bodyText="FOLLOWERS"
            footerIcon={IMAGES.iconUp}
            footerText="99 Today"
          />
          <CardBig
            headerIcon={IMAGES.iconInstagram}
            headerText="@realnathanf"
            bodyNumber="11k"
            bodyText="FOLLOWERS"
            footerIcon={IMAGES.iconUp}
            footerText="1099 Today"
            topCardBorderBg={instagramTopBg}
          />
          <CardBig
            headerIcon={IMAGES.iconYoutube}
            headerText="Nathan F."
            bodyNumber="8239"
            bodyText="SUBSCRIBERS"
            footerIcon={IMAGES.iconDown}
            footerText="144 Today"
            topCardBorderBg={youTubeTopBg}
            footerColor={brightRed}
          />
        </GridContainer>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Content;
