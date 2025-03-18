"use client";

import React, { useState, useEffect } from "react";
import Layout from "@/app/components/Layout/index";
import Projects from "@/app/components/Projects";
import LoadingSpinner from "@/app/components/ui/LoadingSpinner";

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/projects?limit=${limit}`);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [limit]);

  const loadMore = () => {
    setLimit((prevLimit) => prevLimit + 3);
  };

  return (
    <Layout>
      <>
        {loading && projects.length === 0 ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <LoadingSpinner size="large" color="blue-500" />
          </div>
        ) : (
          <>
            <Projects
              sectionTitle={{
                title: "My Projects",
                subtitle: "A showcase of my architectural work",
              }}
              projects={projects}
            />

            {projects.length >= limit && (
              <div className="flex justify-center my-8">
                <button
                  onClick={loadMore}
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Load More Projects
                </button>
              </div>
            )}
          </>
        )}
      </>
    </Layout>
  );
};

export default ProjectsPage;
