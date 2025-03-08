import React from "react";
import { GetStaticProps } from "next";

import InfoBlock from "../../components/ui/InfoBlock";
import Container from "../../components/ui/Container";
import TitleSection from "../../components/ui/TitleSection";
import { IconProps } from "../../components/ui/Icon";

import { SectionTitle } from "../../helpers/definitions";

import * as Styled from "./styles";

interface Service {
  id: string;
  title: string;
  icon: IconProps;
  description: string;
}

interface ServicesProps {
  sectionTitle: SectionTitle;
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ sectionTitle, services }) => {
  return (
    <Container section={true}>
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
        center
      />
      <Styled.Services>
        {services.map((service) => (
          <Styled.ServiceItem key={service.id}>
            <InfoBlock
              icon={service.icon}
              title={service.title}
              content={service.description}
            />
          </Styled.ServiceItem>
        ))}
      </Styled.Services>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Fetch section title data
  const sectionTitleRes = await fetch("/api/services-section");
  const sectionTitle: SectionTitle = await sectionTitleRes.json();

  // Fetch services data
  const servicesRes = await fetch("/api/services");
  const services: Service[] = await servicesRes.json();

  return {
    props: {
      sectionTitle,
      services,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
};

export default Services;
