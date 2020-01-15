import Head from "next/head";
import React from "react";
import Gauges from "@app/common/components/Gauges";
import GoogleAnalytics from "@app/common/components/GoogleAnalytics";
import DevelopmentBar from "@app/common/components/DevelopmentBar";
import Navbar from "@app/ondrej-sika.cz/components/Navbar";
import Footer from "@app/ondrej-sika.cz/components/Footer";
import BootstrapJS from "@app/common/components/BootstrapJS";
import NextSeo from "@app/common/components/NextSeo";

// Imported CSS
import "@app/ondrej-sika.cz/css";

export default props => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css?family=Fira+Sans|Merriweather"
        rel="stylesheet"
      />
    </Head>
    <NextSeo
      title="IT &amp; DevOps školení, konzultace a workshopy"
      description="Zlepšuji práci vývojářských týmu zaváděním efektivních procesů ve vývoji. Naučím Vás používat prověřené nástroje a technologie, které povedou k rychlejšímu vývoji a bezpečnějšímu provozu vašeho software."
      canonicalUrl="https://ondrej-sika.cz/kontakt"
      urlOP="/"
      titleOP=""
      descriptionOP=""
      imageUrl=""
      imageWidth="850"
      imageHeight="650"
      imageAlt="Photo of Ondrej Sika"
      siteName="Ondrej sika"
      handleTwitter=""
      siteTwitter=""
      cardType="summary_large_image"
    />
    <DevelopmentBar />
    <Navbar
      NavName="Ondřej Šika"
      NavUnderheader="Software {Engineer, Konzultant, Lektor}"
      links={[
        ["DOMŮ", "/"],
        [
          "KURZY",
          [
            ["GIT", "/skoleni/git"],
            ["GITLAB CI", "/skoleni/gitlab-ci"],
            ["DOCKER", "/skoleni/docker"],
            ["KUBERNETES", "/skoleni/kubernetes"],
            ["ANSIBLE", "/skoleni/ansible"],
            ["TERRAFORM", "/skoleni/terraform"],
            ["PROMETHEUS", "/skoleni/prometheus"],
            ["PROXMOX", "/skoleni/proxmox"],
            ["REACT & NEXT.JS", "/skoleni/react"]
          ]
        ],
        ["TERMÍNY", "/verejne-terminy"],
        [
          "NÁVODY & ČLÁNKY",
          [
            ["BLOG", "/blog"],
            ["NÁVODY (TECHNICKÉ)", "/navody"],
            ["ČLÁNKY (RŮZNÉ)", "/clanky"],
            ["REPOZITÁŘE", "/repozitare"]
          ]
        ],
        ["KONTAKT", "/kontakt"]
      ]}
    />
    <div className="content">{props.children}</div>
    <Footer />
    <BootstrapJS />
    <Gauges gauges_site_id={props.site.gauges_site_id} />
    <GoogleAnalytics
      google_analytics_site_id={props.site.google_analytics_site_id}
    />
  </div>
);
