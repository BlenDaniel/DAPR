import React from "react";
import Timeline from "../../components/ui/Timeline";
import Container from "../../components/ui/Container";
import TitleSection from "../../components/ui/TitleSection";
import FormatHtml from "../../components/utils/FormatHtml";
import { SectionTitle } from "../../helpers/definitions";

interface ExperienceItem {
  id: string;
  html: string;
  frontmatter: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
  };
}

interface ExperienceProps {
  sectionTitle?: SectionTitle;
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({
  sectionTitle,
  experiences,
}) => {
  return (
    <Container section={false}>
      {sectionTitle && (
        <TitleSection
          title={sectionTitle.title}
          subtitle={sectionTitle.subtitle}
        />
      )}

      {experiences.map((item) => (
        <Timeline
          key={item.id}
          title={item.frontmatter.company}
          subtitle={item.frontmatter.position}
          content={<FormatHtml content={item.html} />}
          startDate={item.frontmatter.startDate}
          endDate={item.frontmatter.endDate}
        />
      ))}
    </Container>
  );
};

export async function getStaticProps() {
  // Fetch section title data
  const sectionTitleRes = await fetch("/api/experiences-section");
  const sectionTitle: SectionTitle = await sectionTitleRes.json();

  // Fetch experiences data
  const experiencesRes = await fetch("/api/experiences");
  const experiences: ExperienceItem[] = await experiencesRes.json();

  return {
    props: {
      sectionTitle,
      experiences,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}

export default Experience;
