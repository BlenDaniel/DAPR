import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProjectsViewModel from "./ViewModel";

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, selectedProject, fetchProjectDetails } = useProjectsViewModel();

  useEffect(() => {
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
    <div className="container mx-auto px-6 py-14">
      <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
      <p className="text-lg mt-4">{selectedProject.description}</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
        {selectedProject.additionalImages?.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`Project detail ${idx + 1}`}
            className="w-full h-40 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
