"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export const Banner = styled.section`
  ${tw("bg-white border-b border-gray-200")};
`;

export const CenterWrapper = styled.div`
  ${tw("flex flex-col items-center justify-center w-full")};
`;

export const Content = styled.p`
  ${tw(`mb-8 text-gray-800 font-medium text-center`)};
`;

export const ProfilePhoto = styled.div`
  ${tw(`flex justify-center items-center mt-4 mb-6 mx-auto`)};
`;

export const ButtonContainer = styled.div`
  ${tw(
    `flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 mx-auto w-full max-w-xs`
  )};
`;
