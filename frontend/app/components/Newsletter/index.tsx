import React from "react";
import { GetStaticProps } from "next";

import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import TitleSection from "../../components/ui/TitleSection";
import { SectionTitle } from "../../helpers/definitions";

import * as Styled from "./styles";

interface Newsletter extends SectionTitle {
  namePlaceholder: string;
  emailPlaceholder: string;
  submitPlaceholder: string;
}

interface NewsletterProps {
  newsletter: Newsletter;
}

const Newsletter: React.FC<NewsletterProps> = ({ newsletter }) => {
  return (
    <Styled.Newsletter>
      <Container section={true}>
        <TitleSection
          title={newsletter.title}
          subtitle={newsletter.subtitle}
          center
        />
        <Styled.Form>
          <Styled.Input type="text" placeholder={newsletter.namePlaceholder} />
          <Styled.Input
            type="email"
            placeholder={newsletter.emailPlaceholder}
          />
          <Button primary block>
            {newsletter.submitPlaceholder}
          </Button>
        </Styled.Form>
      </Container>
    </Styled.Newsletter>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Fetch newsletter data
  const res = await fetch("/api/newsletter-section");
  const newsletter: Newsletter = await res.json();

  return {
    props: {
      newsletter,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
};

export default Newsletter;
