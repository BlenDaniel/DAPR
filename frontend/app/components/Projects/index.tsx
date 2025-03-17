"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@/app/helpers/styled";
import { tw } from "@/app/helpers/tw";

import Container from "../ui/Container";
import TitleSection from "../ui/TitleSection";
import { SectionTitle } from "../../helpers/definitions";

interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  location: string;
  year: string;
  category: string;
  coverImage: string;
  images: string[];
  details: string;
}

interface ProjectsProps {
  sectionTitle: SectionTitle;
  projects: Project[];
}

const ProjectsWrapper = styled.div`
  ${tw(`grid gap-6`)}
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

  &.list-view {
    ${tw(`grid-cols-1 gap-8`)}
  }
`;

const ProjectCard = styled.div`
  ${tw(`bg-white rounded-lg shadow-md overflow-hidden`)}

  &.list-view {
    ${tw(`flex flex-col md:flex-row`)}

    .image-container {
      ${tw(`md:w-1/3`)}
    }

    .content-container {
      ${tw(`md:w-2/3 p-6`)}
    }
  }

  &.grid-view {
    .image-container {
      ${tw(`w-full`)}
    }

    .content-container {
      ${tw(`p-4`)}
    }
  }
`;

const ImageContainer = styled.div`
  ${tw(`relative`)}
  aspect-ratio: 16/9;
`;

const ProjectTitle = styled.h3`
  ${tw(`text-xl font-bold mb-2`)}
`;

const ProjectMeta = styled.div`
  ${tw(`text-sm text-gray-600 mb-2`)}
`;

const ProjectDescription = styled.p`
  ${tw(`text-gray-700`)}
`;

const ViewToggle = styled.div`
  ${tw(`flex justify-end mb-6`)}
`;

const ToggleButton = styled.button`
  ${tw(`px-3 py-1 mx-1 rounded text-sm`)}
  ${(props: { active: boolean }) =>
    props.active
      ? tw(`bg-blue-600 text-white`)
      : tw(`bg-gray-200 text-gray-700`)}
`;

const Projects: React.FC<ProjectsProps> = ({ sectionTitle, projects }) => {
  // Determine default view based on number of projects
  const defaultView = projects.length > 3 ? "grid" : "list";
  const [viewMode, setViewMode] = useState<"grid" | "list">(defaultView);

  useEffect(() => {
    // Update view mode if projects count changes
    setViewMode(projects.length > 3 ? "grid" : "list");
  }, [projects.length]);

  return (
    <Container section={true}>
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
        center
      />

      <ViewToggle>
        <ToggleButton
          active={viewMode === "grid"}
          onClick={() => setViewMode("grid")}
        >
          Grid View
        </ToggleButton>
        <ToggleButton
          active={viewMode === "list"}
          onClick={() => setViewMode("list")}
        >
          List View
        </ToggleButton>
      </ViewToggle>

      <ProjectsWrapper className={viewMode === "list" ? "list-view" : ""}>
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.id}
            passHref
            legacyBehavior
          >
            <a>
              <ProjectCard
                className={viewMode === "list" ? "list-view" : "grid-view"}
              >
                <div className="image-container">
                  <ImageContainer>
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </ImageContainer>
                </div>
                <div className="content-container">
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectMeta>
                    {project.location} | {project.year} | {project.category}
                  </ProjectMeta>
                  <ProjectDescription>{project.description}</ProjectDescription>
                </div>
              </ProjectCard>
            </a>
          </Link>
        ))}
      </ProjectsWrapper>
    </Container>
  );
};

export default Projects;
