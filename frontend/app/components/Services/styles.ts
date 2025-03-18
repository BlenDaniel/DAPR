"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export const Services = styled.div`
  ${tw(`flex flex-wrap justify-center items-stretch px-4 mx-auto`)};
`;

export const ServiceItem = styled.div`
  ${tw(`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 mb-4 text-black flex`)};
`;
