import React, { useEffect } from "react";
import useProjectsViewModel from "./ViewModel";
import { useNavigate } from "react-router-dom";

export const Projects: React.FC = () => {
  const { loading, projects, fetchProjects } = useProjectsViewModel();
  const navigate = useNavigate();

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
    <div className="container mx-auto px-6 py-14">
      <h2 className="text-3xl font-bold text-center mb-10">Our Projects</h2>
      <div className="space-y-6">
        {" "}
        {/* Use space-y for vertical spacing between items */}
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-start bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-1/2 h-48 object-cover" // Set width to half
            />
            <div className="flex flex-col justify-between p-4 w-1/2">
              {" "}
              {/* Flex column for title and text */}
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>{" "}
                {/* Assuming there's a description */}
              </div>
              <button
                  className="w-full text-xl md:text-xl font-semibold text-black hover:text-white hover:bg-black transition-colors duration-300 py-4 px-8 border-2 "
                  onClick={() => navigate(`/projects/${project.id}`)}
                >
                  View Project
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
