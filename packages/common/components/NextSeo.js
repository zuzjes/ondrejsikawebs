import React from "react";
import { NextSeo } from "next-seo";

export default props => (
  <>
    <NextSeo
      title={props.title}
      description={props.description}
      canonical={props.canonicalUrl}
      openGraph={{
        url: props.urlOP,
        title: props.titleOP,
        description: descriptionOP,
        images: [
          {
            url: props.imageUrl,
            width: props.imageWidth,
            height: props.imageHeight,
            alt: props.imageAlt
          }
        ],
        site_name: props.siteName
      }}
      twitter={{
        handle: props.handleTwitter,
        site: props.siteTwitter,
        cardType: props.cardType
      }}
    />
    <p>SEO Added to Page</p>
    {/* <NextSeo
      title=""
      description=""
      canonicalUrl=""
      urlOP=""
      titleOP=""
      descriptionOP=""
      imageUrl=""
      imageWidth=""
      imageHeight=""
      imageAlt=""
      siteName=""
      handleTwitter=""
      siteTwitter=""
      cardType=""
    /> */}
  </>
);
