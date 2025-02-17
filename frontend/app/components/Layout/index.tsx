import React from "react";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

import Footer from "../Footer";
import Newsletter from "../Newsletter";

import * as Styled from "./styles";
import Header from "../Header";
import MotionDiv from "./motionDiv";

interface Props {
  children: React.ReactNode;
  siteTitle: string; // Pass site title as a prop
}

const Layout: React.FC<Props> = ({ children, siteTitle }) => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <AnimatePresence mode="wait">
        <Styled.Layout>
          <Header />
          <MotionDiv
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            {children}
            <Newsletter
              newsletter={{
                namePlaceholder: "string",
                emailPlaceholder: "string",
                submitPlaceholder: "string",
                title: "string",
                subtitle: "string",
              }}
            />
            <Footer />
          </MotionDiv>
        </Styled.Layout>
      </AnimatePresence>
    </>
  );
};

export default Layout;
