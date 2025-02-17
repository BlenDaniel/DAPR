"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export const MainNav = styled.nav`
  ${tw(
    `flex flex-col sm:flex-row sm:w-auto w-full order-last sm:order-none my-4 sm:my-0`
  )}
`;

export const MainNavItem = styled.div`
  ${tw(
    `relative text-indigo-900 border-b border-transparent hover:text-indigo-900 ml-0 sm:ml-8 mt-3 sm:mt-0`
  )}
`;

export const ToggleButton = styled.button<{ isNavVisible: boolean }>`
  ${tw(`sm:hidden p-2 text-indigo-900`)}
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;

  svg {
    transition: transform 0.3s;
    transform: ${(props) =>
      props.isNavVisible ? "rotate(90deg)" : "rotate(0deg)"};
  }
`;
