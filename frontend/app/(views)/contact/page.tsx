import React from "react";
import Layout from "@/app/components/Layout/index";
import Container from "@/app/components/ui/Container";
import ContactForm from "@/app/components/ContactForm";

const ContactPage: React.FC = () => (
  <Layout>
    <>
      {/* <SEO title="Contact" /> */}
      <Container section>
        <ContactForm />
      </Container>
    </>
  </Layout>
);

export default ContactPage;
