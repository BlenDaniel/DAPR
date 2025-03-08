"use client";

import React from "react";
import MainNav from "./MainNav";
import Logo from "./Logo";
import * as Styled from "./styles";
import { Container } from "../ui/Container/styles";
import { useHeaderData } from "./HeaderContext";

export default function Header() {
  const { metadata, logoData, isLoading } = useHeaderData();

  return (
    <Styled.Header>
      <Styled.Wrapper>
        <Container className="header">
          <div style={{ minWidth: "80px" }}>
            {!isLoading && metadata && logoData && (
              <Logo
                logoTitle={`${metadata.logoTitle} - Homepage`}
                logoImageSrc={logoData.src}
              />
            )}
          </div>
          <MainNav />
        </Container>
      </Styled.Wrapper>
    </Styled.Header>
  );
}
