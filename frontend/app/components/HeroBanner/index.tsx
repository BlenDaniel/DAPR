import React from "react";
import { GetStaticProps } from "next";
import Banner from "../../components/ui/Banner"; // Adjust the import path as needed
import { headers } from "next/headers";

interface SectionTitle {
  title: string;
  subtitle: string;
}

interface SectionHeroBanner extends SectionTitle {
  content: string;
  linkTo: string;
  linkText: string;
}

interface HeroBannerProps {
  heroBanner: SectionHeroBanner;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ heroBanner }) => {
  return (
    <Banner
      title={heroBanner.title}
      subtitle={heroBanner.subtitle}
      content={heroBanner.content}
      linkTo={heroBanner.linkTo}
      linkText={heroBanner.linkText}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Fetch hero banner data
  const res = await fetch(process.env.URL + "/api/hero-banner", {
    headers: (await headers()) as unknown as HeadersInit,
    cache: "no-store",
    method: "GET",
  });
  const heroBanner: SectionHeroBanner = await res.json();

  return {
    props: {
      heroBanner,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
};

export default HeroBanner;
