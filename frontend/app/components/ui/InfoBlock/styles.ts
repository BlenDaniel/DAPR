"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export interface InfoBlockProps {
  center?: boolean;
  [key: string]: unknown; // Add index signature to satisfy AnyProps constraint
}

export const InfoBlock = styled.div<InfoBlockProps>`
  ${tw(
    `flex flex-col my-4 mx-3 p-4 bg-white rounded-lg border border-gray-200 items-center text-center h-[300px]`
  )};
`;

export const Icon = styled.div`
  ${tw(`text-2xl mb-4`)}

  /* Apply different colors to icons based on their position */
  &:nth-of-type(4n+1) svg {
    ${tw(`text-blue-600`)}
  }

  &:nth-of-type(4n + 2) svg {
    ${tw(`text-green-600`)}
  }

  &:nth-of-type(4n + 3) svg {
    ${tw(`text-yellow-600`)}
  }

  &:nth-of-type(4n + 4) svg {
    ${tw(`text-red-600`)}
  }
`;

export const Title = styled.h3`
  ${tw(`text-lg font-bold text-black mb-2`)}
`;

export const Content = styled.p`
  ${tw(`text-black`)}
`;

export const Wrapper = styled.div<InfoBlockProps>`
  ${tw(`text-center flex-grow`)};
`;
