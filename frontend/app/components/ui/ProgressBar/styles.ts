"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export interface StyledProps {
  percentage: number;
}

export const ProgressBar = styled.div`
  ${tw(`p-3`)};
`;

export const BarWrapper = styled.div`
  ${tw(`w-full h-2 bg-gray-300 rounded overflow-hidden mt-1`)};
`;

export const Bar = styled.div`
  ${tw(`h-2 bg-teal-400`)};
  width: ${({ percentage }) => `${percentage}%`};
`;

export const Content = styled.div`
  ${tw(`w-full flex justify-between`)};
`;

export const Title = styled.h3`
  ${tw(`font-semibold`)};
`;

export const Percentage = styled.h3`
  ${tw(`font-semibold`)};
`;
