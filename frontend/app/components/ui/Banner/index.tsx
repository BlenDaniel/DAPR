import React from "react";
import Link from "next/link";
import Image from "next/image";

import * as Styled from "./styles";
import Container from "../Container";
import TitleSection from "../TitleSection";
import ThemedButton from "../Button";
import LoadingSpinner from "../LoadingSpinner";

interface Props {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  linkTo: string;
  linkText: string;
  photoSrc?: string;
  isLoading?: boolean;
}

const Banner: React.FC<Props> = ({
  title,
  subtitle,
  content,
  linkTo,
  linkText,
  photoSrc,
  isLoading = false,
}) => (
  <Styled.Banner>
    <Container section={true}>
      <Styled.CenterWrapper>
        {photoSrc && !isLoading && (
          <Styled.ProfilePhoto>
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src={photoSrc}
                alt={title}
                width={200}
                height={200}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </Styled.ProfilePhoto>
        )}
        {isLoading && (
          <Styled.ProfilePhoto>
            <div className="w-[200px] h-[200px] rounded-full flex items-center justify-center">
              <LoadingSpinner size="large" color="blue-500" />
            </div>
          </Styled.ProfilePhoto>
        )}
        <TitleSection title={title} subtitle={subtitle} center={true} />
        <Styled.Content>{content}</Styled.Content>
        <Styled.ButtonContainer>
          <Link href="/projects" passHref>
            <ThemedButton theme="black" block={false} size="medium">
              My works
            </ThemedButton>
          </Link>
          <Link href={linkTo} passHref>
            <ThemedButton theme="blue" block={false} size="medium">
              {linkText}
            </ThemedButton>
          </Link>
        </Styled.ButtonContainer>
      </Styled.CenterWrapper>
    </Container>
  </Styled.Banner>
);

export default Banner;
