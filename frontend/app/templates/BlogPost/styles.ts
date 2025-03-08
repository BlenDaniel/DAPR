"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export const Title = styled.h3`
  ${tw(`font-semibold mb-4`)};
`;

export const Image = styled.figure`
  ${tw(`w-full rounded-lg overflow-hidden mt-4 mb-10`)};
`;

export const Links = styled.div`
  ${tw(`w-full flex justify-between mt-10`)};
`;
