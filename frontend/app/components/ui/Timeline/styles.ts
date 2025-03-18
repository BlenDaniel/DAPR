"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export const Timeline = styled.div`
  ${tw(
    `flex flex-col sm:flex-row w-full p-6 relative border-l-2 border-blue-400 mb-6 text-black`
  )};

  &:last-child {
    ${tw(`pb-0 mb-0`)};
  }
`;

export const Details = styled.div`
  ${tw(`w-full sm:w-1/3 pr-4`)};
`;

export const Content = styled.div`
  ${tw(
    `w-full sm:w-2/3 mt-4 sm:mt-0 text-black bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100`
  )};
`;

export const Title = styled.div`
  ${tw(`font-semibold mt-3 text-black text-lg`)};
`;

export const Subtitle = styled.div`
  ${tw(`text-sm text-gray-700 mb-2`)};
`;

export const Date = styled.div`
  ${tw(`text-sm font-medium text-black rounded-full px-3 py-1`)};
  width: fit-content;
`;

export const Point = styled.span`
  ${tw(`w-4 h-4 border-2 border-white bg-blue-500 rounded-full absolute`)};
  left: -9px;
  top: 20px;
`;
