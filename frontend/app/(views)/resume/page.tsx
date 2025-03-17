import React from "react";
import Layout from "@/app/components/Layout/index";
import Container from "@/app/components/ui/Container";
import TitleSection from "@/app/components/ui/TitleSection";
import FormatHtml from "@/app/components/utils/FormatHtml";

const ResumePage: React.FC = () => (
  <Layout>
    <>
      {/* <SEO title="Resume" /> */}
      <Container section>
        <TitleSection
          title="Resume"
          subtitle="My professional background"
          center
        />
        <FormatHtml content="<p>Your resume content goes here...</p>" />
      </Container>
    </>
  </Layout>
);

export default ResumePage;
