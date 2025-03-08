"use client";

import React, { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import * as Styled from "./styles";

interface MotionButtonProps extends Styled.StyledProps {
  children: React.ReactNode;
  as?: React.ElementType; // Allows for polymorphic behavior
}

const MotionStyledButton = motion.create(Styled.Button); // Create a motion version of the styled button

const Button = forwardRef<
  HTMLElement,
  MotionButtonProps & HTMLMotionProps<"button">
>(({ primary, block, children, as: Component = "button", ...rest }, ref) => {
  const otherProps = { ...rest };
  delete otherProps["data-primary"];
  delete otherProps["data-block"];

  return (
    <MotionStyledButton
      as={Component}
      ref={ref}
      data-primary={primary?.toString()}
      data-block={block?.toString()}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...otherProps}
    >
      {children as React.ReactNode}
    </MotionStyledButton>
  );
});

Button.displayName = "Button";

export default Button;
