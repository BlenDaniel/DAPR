import React from "react";
import Layout from "@/app/components/Layout/index";
import Container from "@/app/components/ui/Container";
import TitleSection from "@/app/components/ui/TitleSection";
import FormatHtml from "@/app/components/utils/FormatHtml";
import Experience from "@/app/components/Experience";
import Education from "@/app/components/Education";
import Skills from "@/app/components/Skills";
import * as S from "./styles";

const ResumePage: React.FC = () => (
  <Layout>
    <S.ResumeContainer>
      <Container section>
        <TitleSection
          title="Resume"
          subtitle="My professional background"
          center
        />
        <S.Introduction>
          <FormatHtml contentType="resume-content" />
        </S.Introduction>
      </Container>

      <S.Section>
        <S.SectionHeader>
          <TitleSection
            title="Work Experience"
            subtitle="My professional career journey"
          />
        </S.SectionHeader>
        <Experience
          experiences={[
            {
              id: "exp-1",
              html: "<p>Founded and led a successful architecture firm specializing in commercial and residential projects. Managed a team of 15 architects and engineers, oversaw project budgets ranging from $500K to $10M, and implemented sustainable design practices across all projects.</p>",
              frontmatter: {
                company: "Smith Architecture & Engineering",
                position: "Founder & Principal Architect",
                startDate: "2010",
                endDate: "Present",
              },
            },
            {
              id: "exp-2",
              html: "<p>Led architectural design for major commercial projects including office buildings, retail spaces, and mixed-use developments. Collaborated with clients, contractors, and regulatory agencies to ensure project success.</p>",
              frontmatter: {
                company: "Johnson & Partners",
                position: "Senior Architect",
                startDate: "2005",
                endDate: "2010",
              },
            },
            {
              id: "exp-3",
              html: "<p>Designed residential and small commercial buildings. Developed expertise in sustainable design practices and building code compliance.</p>",
              frontmatter: {
                company: "Architectural Innovations",
                position: "Project Architect",
                startDate: "2000",
                endDate: "2005",
              },
            },
          ]}
        />
      </S.Section>

      <S.Section>
        <S.SectionHeader>
          <TitleSection
            title="Education"
            subtitle="Academic background and qualifications"
          />
        </S.SectionHeader>
        <Education
          educationItems={[
            {
              id: "edu-1",
              html: "<p>Master's thesis focused on sustainable urban development. Graduated with honors.</p>",
              frontmatter: {
                university: "Massachusetts Institute of Technology",
                degree: "Master of Architecture",
                startDate: "1998",
                endDate: "2000",
              },
            },
            {
              id: "edu-2",
              html: "<p>Foundation in architectural principles, design, and engineering. Dean's List all semesters.</p>",
              frontmatter: {
                university: "University of California, Berkeley",
                degree: "Bachelor of Science in Architecture",
                startDate: "1994",
                endDate: "1998",
              },
            },
          ]}
        />
      </S.Section>

      <S.Section>
        <S.SectionHeader>
          <TitleSection
            title="Professional Skills"
            subtitle="My technical expertise"
          />
        </S.SectionHeader>

        <Skills
          skills={[
            {
              id: "skill-1",
              title: "Architectural Design (Excellent)",
              percentage: 95,
            },
            {
              id: "skill-2",
              title: "Structural Engineering (Advanced)",
              percentage: 75,
            },
            {
              id: "skill-3",
              title: "Project Management (Skilled)",
              percentage: 55,
            },
            {
              id: "skill-4",
              title: "AutoCAD (Good)",
              percentage: 35,
            },
            {
              id: "skill-5",
              title: "Revit (Basic)",
              percentage: 15,
            },
          ]}
        />
      </S.Section>
    </S.ResumeContainer>
  </Layout>
);

export default ResumePage;
