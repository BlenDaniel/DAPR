"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export const Footer = styled.footer`
  ${tw(`border-t border-gray-200 py-12 bg-white w-full`)};
`;

export const Content = styled.div`
  ${tw(
    `flex flex-col items-center justify-center mb-8 text-center mx-auto px-4 sm:px-6`
  )};
`;

export const Logo = styled.div`
  ${tw(`text-2xl font-bold text-black mb-2`)};
`;

export const Description = styled.p`
  ${tw(`text-black max-w-md mb-6 text-center`)};
`;

export const SocialLinks = styled.div`
  ${tw(`flex items-center justify-center w-full`)};
`;

export const SocialLink = styled.a`
  ${tw(
    `text-gray-600 hover:text-blue-600 mx-3 text-xl transition-colors duration-300`
  )};
`;

export const Bottom = styled.div`
  ${tw(
    `flex flex-col md:flex-row items-center justify-center pt-8 border-t border-gray-200 w-full mx-auto px-4 sm:px-6`
  )};
`;

export const Copyright = styled.div`
  ${tw(`text-sm text-black mb-4 md:mb-0 text-center w-full md:w-auto`)};
`;

export const NavLinks = styled.div`
  ${tw(`flex flex-wrap justify-center w-full md:w-auto`)};
`;

export const NavLink = styled.span`
  ${tw(
    `text-sm text-black hover:text-blue-600 mx-3 transition-colors duration-300`
  )};
`;
