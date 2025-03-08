"use client";

import { styled } from "@/app/helpers/styled";
import { tw } from "@/app/helpers/tw";

export const Layout = styled.main`
  ${tw(`flex bg-white flex-col min-h-screen mt-10 text-black`)};

  > :first-child {
    ${tw(`mt-16`)}
  }
`;
