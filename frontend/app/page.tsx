import HeroBanner from "./components/HeroBanner";
import Services from "./components/Services";
import Layout from "./components/Layout";
import Testimonials from "./components/Testimonials";
import CompaniesSlider from "./components/CompaniesSlider";

export default function Home() {
  return (
    <Layout>
      <>
        {/* <SEO title="About Me" /> */}
        <HeroBanner
          heroBanner={{
            title: "John Smith",
            subtitle: "Architecture Engineer & Entrepreneur",
            content:
              "With over 20 years of experience in architectural design and engineering, I've led my own successful firm and delivered exceptional projects for clients worldwide. My passion for innovative, sustainable design drives everything I do.",
            linkTo: "/contact",
            linkText: "Get in touch",
            photoSrc: "/logo.png",
          }}
        />
        <Services />
        <Testimonials />
        <CompaniesSlider />
      </>
    </Layout>
  );
}
