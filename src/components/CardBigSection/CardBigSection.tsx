import React from "react";
import CardBig from "../CardBig/CardBig";
import { IMAGES } from "../../helpers/images";
import { brightRed, instagramTopBg, youTubeTopBg } from "../../common";

function CardBigSection() {
  return (
    <>
      <CardBig
        headerIcon={IMAGES.iconFacebook}
        headerText="@nathanf"
        bodyNumber="1987"
        bodyText="FOLLOWERS"
        footerText="12 Today"
      />
      <CardBig
        headerIcon={IMAGES.iconTwitter}
        headerText="@nathanf"
        bodyNumber="1044"
        bodyText="FOLLOWERS"
        footerText="99 Today"
      />
      <CardBig
        headerIcon={IMAGES.iconInstagram}
        headerText="@realnathanf"
        bodyNumber="11k"
        bodyText="FOLLOWERS"
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
    </>
  );
}

export { CardBigSection };
