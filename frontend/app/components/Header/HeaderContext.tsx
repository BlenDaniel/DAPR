"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface SiteMetadata {
  logoTitle: string;
  logoImageSrc: string;
}

interface HeaderContextType {
  metadata: SiteMetadata | null;
  logoData: { src: string } | null;
  isLoading: boolean;
}

const HeaderContext = createContext<HeaderContextType>({
  metadata: null,
  logoData: null,
  isLoading: true,
});

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [metadata, setMetadata] = useState<SiteMetadata | null>(null);
  const [logoData, setLogoData] = useState<{ src: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const metaRes = await fetch("/api/site-metadata");
        const metaData = await metaRes.json();
        setMetadata(metaData);

        const logoRes = await fetch("/api/logo-image");
        const logo = await logoRes.json();
        setLogoData(logo);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <HeaderContext.Provider value={{ metadata, logoData, isLoading }}>
      {children}
    </HeaderContext.Provider>
  );
}

export const useHeaderData = () => useContext(HeaderContext);
