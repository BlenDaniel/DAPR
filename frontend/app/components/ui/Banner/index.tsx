import React from "react";
import Link from "next/link";

import * as Styled from "./styles";
import Container from "../Container";
import Button from "../Button";
import TitleSection from "../TitleSection";

interface Props {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  linkTo: string;
  linkText: string;
}

const Banner: React.FC<Props> = ({
  title,
  subtitle,
  content,
  linkTo,
  linkText,
}) => (
  <Styled.Banner>
    <Container section={true}>
      <TitleSection title={title} subtitle={subtitle} />
      <Styled.Content>{content}</Styled.Content>
      <Link href={linkTo} passHref>
        <Button as="a" primary>
          {linkText}
        </Button>
      </Link>
    </Container>
  </Styled.Banner>
);

export default Banner;
