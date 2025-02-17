"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export const LogoContainer = styled.div`
  ${tw(`flex items-center mr-auto text-indigo-900 hover:text-indigo-900`)};
`;

export const LogoImage = styled.div`
  ${tw(`w-20 h-20 relative`)}; // Added 'relative' for proper positioning
`;

export const LogoText = styled.span`
  ${tw(`ml-4 text-xl font-bold`)};
`;
