"use client";

import React, { useEffect, useState } from "react";
import Banner from "../../components/ui/Banner"; // Adjust the import path as needed

interface SectionTitle {
  title: string;
  subtitle: string;
}

interface SectionHeroBanner extends SectionTitle {
  content: string;
  linkTo: string;
  linkText: string;
  photoSrc?: string;
}

interface HeroBannerProps {
  heroBanner: SectionHeroBanner;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ heroBanner }) => {
  const [logoData, setLogoData] = useState<{ src: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const logoRes = await fetch("/api/logo-image");
        const logo = await logoRes.json();
        setLogoData(logo);
      } catch (error) {
        console.error("Error fetching logo:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLogo();
  }, []);

  return (
    <Banner
      title={heroBanner.title}
      subtitle={heroBanner.subtitle}
      content={heroBanner.content}
      linkTo={heroBanner.linkTo}
      linkText={heroBanner.linkText}
      photoSrc={logoData?.src || heroBanner.photoSrc}
      isLoading={isLoading}
    />
  );
};

export default HeroBanner;
