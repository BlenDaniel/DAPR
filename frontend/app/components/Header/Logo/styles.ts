"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export const LogoContainer = styled.div`
  ${tw(`flex items-center mr-auto text-indigo-900 hover:text-indigo-900`)};
`;

export const LogoImage = styled.div`
  ${tw(`w-8 h-8 relative`)};
`;

export const LogoText = styled.span`
  ${tw(`ml-2 text-sm font-medium hidden sm:inline-block`)};
`;
