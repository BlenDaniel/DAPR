"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export interface StyledProps {
  primary?: boolean;
  block?: boolean;
  theme?: "default" | "green" | "teal" | "red" | "black" | "blue" | "grey";
  size?: "small" | "medium" | "large";
  [key: string]: unknown;
}

// Helper function to get theme-based Tailwind classes
const getThemeClasses = (
  theme: StyledProps["theme"],
  primary: boolean | undefined
) => {
  if (primary) {
    return tw(`bg-teal-300 hover:border-teal-500 border-teal-200`);
  }

  switch (theme) {
    case "green":
      return tw(`bg-emerald-400 hover:border-emerald-500 border-emerald-300`);
    case "teal":
      return tw(`bg-teal-500 hover:border-teal-600 border-teal-400`);
    case "red":
      return tw(`bg-red-400 hover:border-red-500 border-red-300`);
    case "black":
      return tw(`bg-gray-700 hover:border-gray-800 border-gray-600`);
    case "blue":
      return tw(`bg-blue-400 hover:border-blue-500 border-blue-300`);
    case "grey":
      return tw(`bg-gray-400 hover:border-gray-500 border-gray-300`);
    default:
      return tw(`bg-gray-400 hover:border-gray-500 border-gray-300`);
  }
};

// Size configuration with all size-related properties
const sizeConfig = {
  small: {
    padding: tw("py-1 px-4"),
    fontSize: tw("text-xs"),
    width: tw("w-24"), // Fixed width of 6rem (96px)
  },
  medium: {
    padding: tw("py-2 px-6"),
    fontSize: tw("text-sm"),
    width: tw("w-32"), // Fixed width of 8rem (128px)
  },
  large: {
    padding: tw("py-3 px-8"),
    fontSize: tw("text-base"),
    width: tw("w-40"), // Fixed width of 10rem (160px)
  },
};

export const Button = styled.button<StyledProps>`
  ${tw(`rounded-md font-medium transition-all duration-300 shadow-sm hover:shadow-md
        transform text-white hover:-translate-y-1 border outline-none flex justify-center items-center`)};

  /* Theme-based styling */
  ${(props) => getThemeClasses(props.theme, props.primary)};

  /* Size-based styling */
  ${(props) => {
    const size = props.size || "medium";
    const config = sizeConfig[size];
    return `
      ${config.padding}
      ${config.fontSize}
      ${config.width}
    `;
  }}

  /* Block mode (full width) */
  ${(props) => (props.block ? tw("w-full") : "")}

  /* Text handling */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
