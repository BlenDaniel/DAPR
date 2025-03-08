import React from "react";

import Layout from "@/app/components/Layout";
import Experience from "@/app/components/Experience";
import Education from "@/app/components/Education";
import Skills from "@/app/components/Skills";

const ResumePage: React.FC = () => (
  <Layout siteTitle="">
    <>
      {/* <SEO title="Resume" /> */}
      <Experience sectionTitle={{ title: "", subtitle: "" }} experiences={[]} />
      <hr />
      <Education
        sectionTitle={{ title: "", subtitle: "" }}
        educationItems={[]}
      />
      <hr />
      <Skills sectionTitle={{ title: "", subtitle: "" }} skills={[]} />
    </>
  </Layout>
);

export default ResumePage;
