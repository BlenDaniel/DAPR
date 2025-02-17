import React from "react";

import Layout from "@/app/components/Layout";
import SEO from "@/app/components/SEO";
import ContactInfo from "@/app/components/ContactInfo";

const ContactPage: React.FC = () => {
  return (
    <Layout siteTitle="">
      <>
        {/* <SEO title="Contact" /> */}
        <ContactInfo
          sectionTitle={{
            title: "Contanct Us",
            subtitle: "",
          }}
          contacts={[]}
        />
      </>
    </Layout>
  );
};

export default ContactPage;
