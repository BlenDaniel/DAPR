"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@/app/helpers/styled";
import { tw } from "@/app/helpers/tw";
import Layout from "@/app/components/Layout/index";
import Container from "@/app/components/ui/Container";
import TitleSection from "@/app/components/ui/TitleSection";
import FormatHtml from "@/app/components/utils/FormatHtml";

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

const ProjectHeader = styled.div`
  ${tw(`mb-8`)}
`;

const ProjectMeta = styled.div`
  ${tw(`flex flex-wrap gap-4 mb-6 text-gray-600`)}
`;

const MetaItem = styled.div`
  ${tw(`flex items-center`)}
`;

const MetaLabel = styled.span`
  ${tw(`font-semibold mr-2`)}
`;

const ProjectContent = styled.div`
  ${tw(`mb-12`)}
`;

const ImagesGrid = styled.div`
  ${tw(`grid gap-4 mb-12`)}
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const ImageWrapper = styled.div`
  ${tw(`relative rounded-lg overflow-hidden shadow-md`)}
  aspect-ratio: 4/3;
`;

const BackButton = styled.a`
  ${tw(
    `inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded mb-8`
  )}
`;

const ProjectDetailPage = ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const unwrappedParams = React.use(params);
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/projects/${unwrappedParams.slug}`);

        if (!response.ok) {
          throw new Error("Project not found");
        }

        const data = await response.json();
        setProject(data);
      } catch (err) {
        console.error("Error fetching project:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [unwrappedParams.slug]);

  if (loading) {
    return (
      <Layout>
        <Container section>
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </Container>
      </Layout>
    );
  }

  if (error || !project) {
    return (
      <Layout>
        <Container section>
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
            <p className="mb-6">{error || "Project not found"}</p>
            <Link href="/projects" passHref legacyBehavior>
              <BackButton>← Back to Projects</BackButton>
            </Link>
          </div>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container section>
        <Link href="/projects" passHref legacyBehavior>
          <BackButton>← Back to Projects</BackButton>
        </Link>

        <ProjectHeader>
          <TitleSection
            title={project.title}
            subtitle={project.description}
            center
          />

          <ProjectMeta>
            <MetaItem>
              <MetaLabel>Location:</MetaLabel> {project.location}
            </MetaItem>
            <MetaItem>
              <MetaLabel>Year:</MetaLabel> {project.year}
            </MetaItem>
            <MetaItem>
              <MetaLabel>Category:</MetaLabel> {project.category}
            </MetaItem>
          </ProjectMeta>
        </ProjectHeader>

        <ProjectContent>
          <FormatHtml content={`<p>${project.details}</p>`} />
        </ProjectContent>

        <TitleSection
          title="Project Gallery"
          subtitle="Images of the completed project"
          center
        />

        <ImagesGrid>
          {project.images.map((image, index) => (
            <ImageWrapper key={index}>
              <Image
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </ImageWrapper>
          ))}
        </ImagesGrid>
      </Container>
    </Layout>
  );
};

export default ProjectDetailPage;
