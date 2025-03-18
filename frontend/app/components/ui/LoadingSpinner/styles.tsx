"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

interface SpinnerProps {
  size: "small" | "medium" | "large";
  color: string;
  [key: string]: unknown;
}

export const SpinnerContainer = styled.div`
  ${tw(`flex justify-center items-center`)}
`;

export const Spinner = styled.div<SpinnerProps>`
  ${({ size }) => {
    switch (size) {
      case "small":
        return tw(`h-6 w-6`);
      case "large":
        return tw(`h-16 w-16`);
      case "medium":
      default:
        return tw(`h-12 w-12`);
    }
  }}
  ${({ color }) => tw(`border-t-2 border-b-2 border-${color}`)}
  ${tw(`animate-spin rounded-full`)}
`;
