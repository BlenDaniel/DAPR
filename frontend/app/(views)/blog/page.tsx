import React from "react";

import Posts from "@/app/components/Posts";
import Layout from "@/app/components/Layout";

const BlogPage: React.FC = () => {
  return (
    <Layout siteTitle="">
      <>
        {/* <SEO title="Blog" /> */}
        <Posts sectionTitle={{ title: "", subtitle: "" }} posts={[]} />
      </>
    </Layout>
  );
};

export default BlogPage;
