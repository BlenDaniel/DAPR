import React from "react";
import Image from "next/image";
import * as Styled from "./styles";
import Link from "next/link";

interface LogoProps {
  logoTitle: string;
  logoImageSrc: string;
}

const Logo: React.FC<LogoProps> = ({ logoTitle, logoImageSrc }) => {
  return (
    <Styled.LogoContainer>
      <Link href="/">
        <Styled.LogoImage>
          <Image
            src={logoImageSrc}
            alt={logoTitle}
            width={80}
            height={80}
            style={{ width: "100%", height: "auto" }}
          />
        </Styled.LogoImage>
        <Styled.LogoText>{logoTitle}</Styled.LogoText>
      </Link>
    </Styled.LogoContainer>
  );
};

export default Logo;
