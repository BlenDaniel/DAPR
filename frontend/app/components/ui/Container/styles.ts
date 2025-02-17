"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export const Container = styled.div`
  ${tw(`flex flex-wrap max-w-screen-md w-full mx-auto p-5`)};
  ${({ section }: { section?: boolean }) =>
    section ? tw(`py-8 sm:py-16`) : ""};
`;
