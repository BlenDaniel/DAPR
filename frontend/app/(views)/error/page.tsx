import React from "react";
import Container from "@/app/components/ui/Container";
import TitleSection from "@/app/components/ui/TitleSection";
import Layout from "@/app/components/Layout/index";

const NotFoundPage: React.FC = () => (
  <Layout siteTitle="">
    <>
      {/* <SEO title="404: Not found" /> */}
      <Container section={true}>
        <TitleSection title="404" subtitle="Page not found" center />
        <p className="mt-4 text-center w-full">
          You just hit a route that doesn&#39;t exist... the sadness.
        </p>
      </Container>
    </>
  </Layout>
);

export default NotFoundPage;
