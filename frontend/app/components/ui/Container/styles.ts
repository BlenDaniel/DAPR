"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export interface ContainerProps {
  section?: boolean;
  className?: string;
  [key: string]: unknown;
}

export const Container = styled.div<ContainerProps>`
  ${tw(`flex flex-wrap max-w-screen-md w-full mx-auto px-4 sm:px-6`)};
  ${({ section }: ContainerProps) =>
    section ? tw(`py-8 sm:py-16`) : tw(`py-1`)};

  &.header {
    ${tw(`py-5 sm:py-5 px-2 sm:px-4 items-center justify-between`)}
  }
`;
