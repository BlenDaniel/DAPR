"use client";

import { styled } from "@/app/helpers/styled";
import { tw } from "@/app/helpers/tw";

interface TitleSectionProps {
  center?: boolean;
  [key: string]: unknown; // Add index signature to satisfy AnyProps constraint
}

export const TitleSection = styled.div`
  ${tw(`flex flex-col w-full mb-8 text-black items-center`)};
`;

export const Title = styled.h2<TitleSectionProps>`
  ${tw(`uppercase mt-4 text-3xl font-bold w-full text-center text-blue-900`)};
  &[data-center="true"] {
    ${tw(`text-center`)}
  }
`;

export const SubTitle = styled.h4<TitleSectionProps>`
  ${tw(`text-md text-blue-600 w-full text-center`)};
  &[data-center="true"] {
    ${tw(`text-center`)}
  }
`;

export const Separator = styled.h2<TitleSectionProps>`
  ${tw(`relative w-2 h-8 mb-6 -mt-2`)};
  &[data-center="true"] {
    ${tw(`mx-auto`)}
  }

  &:before {
    content: "";
    ${tw(`bg-blue-500 h-full w-px absolute left-0`)};
  }

  &:after {
    content: "";
    ${tw(`bg-green-500 h-6 w-px absolute ml-1`)};
  }
`;
