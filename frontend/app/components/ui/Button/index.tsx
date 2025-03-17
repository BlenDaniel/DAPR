"use client";

import React from "react";
import { Button, StyledProps } from "./styles";

interface ThemedButtonProps
  extends Omit<StyledProps, "theme" | "size" | "block" | "primary"> {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  theme?: StyledProps["theme"];
  size?: StyledProps["size"];
  block?: boolean;
  primary?: boolean;
  className?: string;
}

const ThemedButton: React.FC<ThemedButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  theme = "default",
  size = "medium",
  block = false,
  primary = false,
  className = "",
  ...rest
}) => {
  // For debugging
  console.log("Button props:", { theme, size, block, primary });

  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled ? true : undefined}
      theme={theme}
      size={size}
      block={block}
      primary={primary}
      className={className}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ThemedButton;
