"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export const ResumeContainer = styled.div`
  ${tw(`max-w-5xl mx-auto px-4 py-8 text-black`)};
`;

export const Introduction = styled.div`
  ${tw(`mb-8 text-lg text-black leading-relaxed`)};

  p {
    ${tw(`mb-4 text-black`)};
  }
`;

export const Section = styled.div`
  ${tw(`mb-12 bg-white rounded-lg shadow-md p-6 border border-gray-100`)};
`;

export const SectionHeader = styled.div`
  ${tw(`border-b border-gray-200 pb-4 mb-6`)};
`;

export const Timeline = styled.div`
  ${tw(`relative border-l-2 border-blue-400 pl-8 mb-6`)};

  &::before {
    content: "";
    ${tw(
      `absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] border-2 border-white`
    )};
  }
`;

export const TimelineContent = styled.div`
  ${tw(`bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100`)};
`;

export const SkillsGrid = styled.div`
  ${tw(`flex flex-col items-center w-full`)};
`;

export const SkillItem = styled.div`
  ${tw(`bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100`)};
`;
