"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export const MainNav = styled.nav`
  ${tw(
    `flex flex-col sm:flex-row sm:w-auto w-full order-last sm:order-none my-2 sm:my-0 items-center`
  )}
`;

export const MainNavItem = styled.div`
  ${tw(
    `relative text-indigo-900 border-b border-transparent hover:text-indigo-900 ml-0 sm:ml-4 mt-2 sm:mt-0 text-sm flex items-center`
  )}
`;

export const ToggleButton = styled.button<{ "data-is-nav-visible": boolean }>`
  ${tw(`sm:hidden p-1 text-indigo-900`)}
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.3s;
    transform: ${(props) =>
      props["data-is-nav-visible"] ? "rotate(90deg)" : "rotate(0deg)"};
  }
`;
