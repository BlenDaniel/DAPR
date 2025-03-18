"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export const Skills = styled.div`
  ${tw(`flex flex-col items-center justify-center w-full mx-auto`)};
  height: 400px; /* Set a constant height */
  overflow-y: auto; /* Add scrolling if content exceeds height */
`;

export const Skill = styled.div`
  ${tw(`w-full max-w-3xl mb-6`)};
  height: 70px; /* Set a consistent height for each skill item */
`;
