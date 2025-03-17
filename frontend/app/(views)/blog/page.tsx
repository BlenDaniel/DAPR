import React from "react";
import Layout from "@/app/components/Layout/index";
import Posts from "@/app/components/Posts";

const BlogPage: React.FC = () => (
  <Layout>
    <>
      {/* <SEO title="Blog" /> */}
      <Posts
        sectionTitle={{
          title: "Blog",
          subtitle: "My latest blog posts",
        }}
        posts={[]}
      />
    </>
  </Layout>
);

export default BlogPage;
