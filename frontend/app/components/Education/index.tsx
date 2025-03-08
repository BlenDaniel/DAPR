import React from "react";
import Timeline from "../../components/ui/Timeline";
import Container from "../../components/ui/Container";
import TitleSection from "../../components/ui/TitleSection";
import FormatHtml from "../../components/utils/FormatHtml";
import { SectionTitle } from "../../helpers/definitions";

interface EducationItem {
  id: string;
  html: string;
  frontmatter: {
    university: string;
    degree: string;
    startDate: string;
    endDate: string;
  };
}

interface EducationProps {
  sectionTitle: SectionTitle;
  educationItems: EducationItem[];
}

const Education: React.FC<EducationProps> = ({
  sectionTitle,
  educationItems,
}) => {
  return (
    <Container section={true}>
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
      />

      {educationItems.map((item) => (
        <Timeline
          key={item.id}
          title={item.frontmatter.university}
          subtitle={item.frontmatter.degree}
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
  const sectionTitleRes = await fetch("/api/education-section");
  const sectionTitle: SectionTitle = await sectionTitleRes.json();

  // Fetch education items data
  const educationItemsRes = await fetch("/api/education-items");
  const educationItems: EducationItem[] = await educationItemsRes.json();

  return {
    props: {
      sectionTitle,
      educationItems,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}

export default Education;
