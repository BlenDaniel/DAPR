import Project from "@/model/types";
import projects from "../../data/projects.json";


const ProjectService = {
  async fetchAllProjects(): Promise<Project[]> {
    // Simulate a fetch from JSON
    return new Promise((resolve) => {
      setTimeout(() => resolve(projects), 1); // Simulate network latency
    });
  },

  async fetchProjectById(id: string): Promise<Project> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const project = projects.find((p) => p.id === id);
        if (project) {
          resolve(project);
        } else {
          reject(new Error("Project not found"));
        }
      }, 1);
    });
  }
};

export default ProjectService;
