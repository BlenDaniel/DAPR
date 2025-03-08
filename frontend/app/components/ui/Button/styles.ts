"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";
import { ReactNode } from "react";

export interface StyledProps {
  primary?: boolean;
  block?: boolean;
  children?: ReactNode;
  [key: string]: unknown;
}

export const Button = styled.button<StyledProps>`
  outline: none !important;
  ${tw(`py-2 px-8 rounded-full border border-teal-300 text-indigo-900`)}

  &[data-primary="true"] {
    ${tw(`bg-teal-300`)}
  }

  &[data-primary="false"] {
    ${tw(`text-indigo-600`)}
  }

  &[data-block="true"] {
    ${tw(`w-full`)}
  }
`;
