"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";

import * as Styled from "./styles";

interface Props extends Styled.StyledProps {
  children: React.ReactNode;
  as?: React.ElementType;
}

const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  Props &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ primary, block, children, as, ...rest }, ref) => {
  const Component = as || "button";

  // Wrap the Styled.Button with motion
  const MotionStyledButton = motion(Styled.Button);

  return (
    <MotionStyledButton
      as={Component} // Use the passed `as` prop or default to "button"
      ref={ref}
      primary={primary}
      block={block}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...rest}
    >
      {children}
    </MotionStyledButton>
  );
});

Button.displayName = "Button";

export default Button;
