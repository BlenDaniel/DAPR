"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Projects.module.css";
import useProjectsViewModel from "./ViewModel";

export const Projects: React.FC = () => {
  const { loading, projects, fetchProjects } = useProjectsViewModel();

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!projects || projects.length === 0) {
    return <div>No projects found.</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Projects</h2>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={300}
              className={styles.projectImage}
            />
            <div className={styles.projectInfo}>
              <div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </div>
              <Link
                href={`/projectDetails?id=${project.id}`}
                className={styles.viewProjectLink}
                scroll={false}
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
