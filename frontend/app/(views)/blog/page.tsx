"use client";

import React, { useState, useEffect } from "react";
import Layout from "@/app/components/Layout/index";
import Posts from "@/app/components/Posts";

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/blog-posts?limit=${limit}`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [limit]);

  const loadMore = () => {
    setLimit((prevLimit) => prevLimit + 2);
  };

  return (
    <Layout>
      <>
        {/* <SEO title="Blog" /> */}
        {loading && posts.length === 0 ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            <Posts
              sectionTitle={{
                title: "Blog",
                subtitle:
                  "Thoughts and insights on architecture and engineering",
              }}
              posts={posts}
            />

            {posts.length >= limit && (
              <div className="flex justify-center my-8">
                <button
                  onClick={loadMore}
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Load More Posts
                </button>
              </div>
            )}
          </>
        )}
      </>
    </Layout>
  );
};

export default BlogPage;
