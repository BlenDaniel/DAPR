"use client";

import Project from "@/app/model/types";
import ProjectService from "@/app/services/ProjectService";
import { useState, useCallback } from "react";

interface ProjectsDetailViewModel {
  loading: boolean;
  projects: Project[] | null;
  selectedProject: Project | null;
  fetchProjects: () => void;
  fetchProjectDetails: (id: string) => void;
}

export default function useProjectsDetailViewModel(): ProjectsDetailViewModel {
  const [loading, setLoading] = useState<boolean>(false);
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    try {
      const response = await ProjectService.fetchAllProjects();
      setProjects(response);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchProjectDetails = useCallback(async (id: string) => {
    setLoading(true);
    console.log("Error fetching project details:" + id);
    try {
      const response = await ProjectService.fetchProjectById(id);
      setSelectedProject(response);
    } catch (error) {
      console.error("Error fetching project details:", error);
      setSelectedProject(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    projects,
    selectedProject,
    fetchProjects,
    fetchProjectDetails,
  };
}
