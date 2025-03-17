"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
// Remove Head import as it's not compatible with app router
// import Head from "next/head";

import Footer from "../Footer";
// Remove Newsletter import
// import Newsletter from "../Newsletter";

import * as Styled from "./styles";
import Header from "../Header";
import MotionDiv from "./motionDiv";

interface Props {
  children: React.ReactNode;
  // Remove siteTitle prop as it's no longer used
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {/* Remove Head component as it's not compatible with app router */}
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
            {/* Remove Newsletter component */}
            <Footer />
          </MotionDiv>
        </Styled.Layout>
      </AnimatePresence>
    </>
  );
};

export default Layout;
