"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export const Footer = styled.footer`
  ${tw(`border-t border-gray-200 py-4`)};
`;

export const Links = styled.div`
  ${tw(`flex items-center justify-center w-full`)};

  a {
    ${tw(`text-indigo-900 hover:text-indigo-600 mx-2`)};
  }
`;

export const Link = styled.a`
  ${tw(`text-indigo-900 hover:text-indigo-600 mx-2`)};
`;
