"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export const Header = styled.header`
  ${tw(
    `bg-gray-100 border-b border-gray-200 fixed top-0 left-0 right-0 z-50 h-8`
  )};
`;

export const Wrapper = styled.div`
  ${tw(`items-center h-full flex py-0`)};
`;
