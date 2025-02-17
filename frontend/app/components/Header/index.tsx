import React from "react";

import MainNav from "./MainNav";
import Logo from "./Logo";
import { headers } from "next/headers";
import * as Styled from "./styles";
import { Container } from "../ui/Container/styles";

export default async function Header() {
  const { logoTitle, logoImageSrc } = await getSiteMetadata();
  return (
    <Styled.Header>
      <Styled.Wrapper>
        <Container>
          <Logo logoTitle={logoTitle} logoImageSrc={logoImageSrc} />
          <MainNav />
        </Container>
      </Styled.Wrapper>
    </Styled.Header>
  );
}

async function getSiteMetadata() {
  // Fetch site metadata
  const siteMetadataRes = await fetch(process.env.URL + "/api/site-metadata", {
    headers: (await headers()) as unknown as HeadersInit,
    cache: "no-store",
    method: "GET",
  });
  const siteMetadata = await siteMetadataRes.json();

  // Fetch logo image path
  const logoImageRes = await fetch(process.env.URL + "/api/logo-image", {
    headers: (await headers()) as unknown as HeadersInit,
    cache: "no-store",
    method: "GET",
  });
  const logoImageData = await logoImageRes.json();

  return {
    logoTitle: siteMetadata.title,
    logoImageSrc: logoImageData.src,
  };
}
