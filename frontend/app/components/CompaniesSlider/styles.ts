"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export const SliderContainer = styled.div`
  ${tw(`my-8 w-full overflow-hidden`)};
`;

export const CompanyItem = styled.div`
  ${tw(
    `flex items-center justify-center p-4 bg-white rounded-lg h-24 transition-transform hover:shadow-sm border border-gray-50`
  )};
`;
