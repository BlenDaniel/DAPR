"use client";

import React from "react";
import useProjectsDetailViewModel from "./ViewModel";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import styles from "../../styles/ProjectDetail.module.css";

export default function ProjectDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { loading, selectedProject, fetchProjectDetails } =
    useProjectsDetailViewModel();

  React.useEffect(() => {
    if (id) {
      fetchProjectDetails(id);
    }
  }, [id, fetchProjectDetails]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!selectedProject) {
    return <div>Project not found.</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{selectedProject.title}</h2>
      <p className={styles.description}>{selectedProject.description}</p>
      <div className={styles.imageGrid}>
        {selectedProject.additionalImages?.map((image, idx) => (
          <Image
            key={idx}
            src={image}
            alt={`Project detail ${idx + 1}`}
            width={500}
            height={300}
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
}
