"use client";

import React, { useEffect, useState } from "react";

import InfoBlock from "../ui/InfoBlock";
import Container from "../ui/Container";
import TitleSection from "../ui/TitleSection";
import { IconProps } from "../ui/Icon";
import LoadingSpinner from "../ui/LoadingSpinner";

import { SectionTitle } from "../../helpers/definitions";

import * as Styled from "./styles";

interface Service {
  id: string;
  title: string;
  icon: IconProps;
  description: string;
}

interface ServicesProps {
  sectionTitle?: SectionTitle;
  services?: Service[];
}

const Services: React.FC<ServicesProps> = ({
  sectionTitle: initialSectionTitle,
  services: initialServices,
}) => {
  const [sectionTitle, setSectionTitle] = useState<SectionTitle | null>(
    initialSectionTitle || null
  );
  const [services, setServices] = useState<Service[]>(initialServices || []);
  const [loading, setLoading] = useState<boolean>(
    !initialSectionTitle || !initialServices
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch section title if not provided
        if (!initialSectionTitle) {
          const sectionTitleRes = await fetch("/api/services-section");
          const sectionTitleData = await sectionTitleRes.json();
          setSectionTitle(sectionTitleData);
        }

        // Fetch services if not provided
        if (!initialServices) {
          const servicesRes = await fetch("/api/services");
          const servicesData = await servicesRes.json();
          setServices(servicesData);
        }
      } catch (error) {
        console.error("Error fetching services data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!initialSectionTitle || !initialServices) {
      fetchData();
    }
  }, [initialSectionTitle, initialServices]);

  if (loading) {
    return (
      <Container section={true}>
        <div className="flex justify-center items-center h-40">
          <LoadingSpinner size="medium" color="blue-500" />
        </div>
      </Container>
    );
  }

  return (
    <Container section={true}>
      {sectionTitle && (
        <TitleSection
          title={sectionTitle.title}
          subtitle={sectionTitle.subtitle}
          center
        />
      )}
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

export default Services;
