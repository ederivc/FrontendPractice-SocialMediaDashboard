import React from "react";
import { brightRed } from "../../common";
import { IMAGES } from "../../helpers/images";
import { CardSmall } from "../CardSmall/CardSmall";

function CardSmallSection() {
  return (
    <>
      <CardSmall
        headerText="Page Views"
        headerIcon={IMAGES.iconFacebook}
        bodyText="87"
        bodyNumbers="3%"
      />
      <CardSmall
        headerText="Page Views"
        headerIcon={IMAGES.iconFacebook}
        bodyText="87"
        bodyNumbers="3%"
        bodyIcon={IMAGES.iconDown}
        percentColor={brightRed}
      />
      <CardSmall
        headerText="Page Views"
        headerIcon={IMAGES.iconFacebook}
        bodyText="87"
        bodyNumbers="3%"
      />
      <CardSmall
        headerText="Page Views"
        headerIcon={IMAGES.iconFacebook}
        bodyText="87"
        bodyNumbers="3%"
      />
      <CardSmall
        headerText="Page Views"
        headerIcon={IMAGES.iconFacebook}
        bodyText="87"
        bodyNumbers="3%"
      />
      <CardSmall
        headerText="Page Views"
        headerIcon={IMAGES.iconFacebook}
        bodyText="87"
        bodyNumbers="3%"
      />
      <CardSmall
        headerText="Page Views"
        headerIcon={IMAGES.iconFacebook}
        bodyText="87"
        bodyNumbers="3%"
        bodyIcon={IMAGES.iconDown}
        percentColor={brightRed}
      />
      <CardSmall
        headerText="Page Views"
        headerIcon={IMAGES.iconFacebook}
        bodyText="87"
        bodyNumbers="3%"
        bodyIcon={IMAGES.iconDown}
        percentColor={brightRed}
      />
    </>
  );
}

export { CardSmallSection };
