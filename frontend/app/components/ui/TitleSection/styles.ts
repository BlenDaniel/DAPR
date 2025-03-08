"use client";

import { styled } from "@/app/helpers/styled";
import { tw } from "@/app/helpers/tw";

interface TitleSectionProps {
  center?: boolean;
  [key: string]: unknown; // Add index signature to satisfy AnyProps constraint
}

export const TitleSection = styled.div`
  ${tw(`flex flex-col w-full mb-8`)}
`;

export const Title = styled.h2<TitleSectionProps>`
  ${tw(`uppercase mb-4 text-lg font-bold w-full text-left`)};
  &[data-center="true"] {
    ${tw(`text-center`)}
  }
`;

export const SubTitle = styled.h4<TitleSectionProps>`
  ${tw(`text-xs text-indigo-600 w-full text-left`)};
  &[data-center="true"] {
    ${tw(`text-center`)}
  }
`;

export const Separator = styled.h2<TitleSectionProps>`
  ${tw(`relative w-2 h-8 mb-6 -mt-2`)};
  &[data-center="true"] {
    ${tw(`text-center`)}
  }

  &:before {
    content: "";
    ${tw(`bg-indigo-500 h-full w-px absolute left-0`)};
  }

  &:after {
    content: "";
    ${tw(`bg-teal-400 h-6 w-px absolute ml-1`)};
  }
`;
