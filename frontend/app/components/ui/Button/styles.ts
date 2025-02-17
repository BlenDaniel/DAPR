"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export interface StyledProps {
  primary?: boolean;
  block?: boolean;
}

export const Button = styled.button`
  outline: none !important;
  ${tw(`py-2 px-8 rounded-full border border-teal-300 text-indigo-900`)}

  ${({ primary }: { primary?: boolean }) =>
    primary ? tw(`bg-teal-300`) : tw(`text-indigo-600`)}

  ${({ block }: { block?: boolean; primary?: boolean }) =>
    block ? tw(`w-full`) : ""}
`;
