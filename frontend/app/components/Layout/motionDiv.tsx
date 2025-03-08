"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

interface MotionDivProps extends MotionProps {
  children: React.ReactNode;
}

const MotionDiv: React.FC<MotionDivProps> = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>;
};

export default MotionDiv;
