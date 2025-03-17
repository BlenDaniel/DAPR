import HeroBanner from "./components/HeroBanner";
import Services from "./components/Services";
import Layout from "./components/Layout";
import TestimonialsPage from "./components/Testimonials/page";

export default function Home() {
  return (
    <Layout>
      <>
        {/* <SEO title="About Me" /> */}
        <HeroBanner
          heroBanner={{
            title: "Welcome to My Website",
            subtitle: "Learn more about me and my services",
            content:
              "I'm a professional offering various services to help you succeed.",
            linkTo: "/contact",
            linkText: "Get in touch",
          }}
        />
        <Services
          sectionTitle={{
            title: "My Services",
            subtitle: "What I can do for you",
          }}
          services={
            [
              // Add your services here
              // Example: { title: "Web Development", description: "Custom websites tailored to your needs" }
            ]
          }
        />
        <hr />
        <TestimonialsPage />
      </>
    </Layout>
  );
}
