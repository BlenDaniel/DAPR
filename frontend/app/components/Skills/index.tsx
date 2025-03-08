import React from "react";
import { GetStaticProps } from "next";

import Container from "../../components/ui/Container";
import TitleSection from "../../components/ui/TitleSection";
import ProgressBar from "../../components/ui/ProgressBar";

import { SectionTitle } from "../../helpers/definitions";

import * as Styled from "./styles";

interface Skill {
  id: string;
  title: string;
  percentage: number;
}

interface SkillsProps {
  sectionTitle: SectionTitle;
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ sectionTitle, skills }) => {
  return (
    <Container section={true}>
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
        center
      />
      <Styled.Skills>
        {skills.map((skill) => (
          <Styled.Skill key={skill.id}>
            <ProgressBar title={skill.title} percentage={skill.percentage} />
          </Styled.Skill>
        ))}
      </Styled.Skills>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Fetch section title data
  const sectionTitleRes = await fetch("/api/skills-section");
  const sectionTitle: SectionTitle = await sectionTitleRes.json();

  // Fetch skills data
  const skillsRes = await fetch("/api/skills");
  const skills: Skill[] = await skillsRes.json();

  return {
    props: {
      sectionTitle,
      skills,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
};

export default Skills;
