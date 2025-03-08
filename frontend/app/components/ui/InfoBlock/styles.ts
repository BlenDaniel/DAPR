"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export interface InfoBlockProps {
  center?: boolean;
  [key: string]: unknown; // Add index signature to satisfy AnyProps constraint
}

export const InfoBlock = styled.div<InfoBlockProps>`
  ${tw(
    `flex flex-col my-4 mx-3 p-4 bg-white rounded-lg border border-gray-300`
  )};
  ${({ center }) => (center ? tw(`items-center`) : "")};
`;

export const Icon = styled.div`
  ${tw(`text-2xl text-indigo-600 mb-4`)}
`;

export const Title = styled.h3`
  ${tw(`text-lg font-bold text-indigo-900 mb-2`)}
`;

export const Content = styled.p`
  ${tw(`text-gray-600`)}
`;

export const Wrapper = styled.div<InfoBlockProps>`
  ${({ center }) => (center ? tw(`text-center`) : "")};
`;
