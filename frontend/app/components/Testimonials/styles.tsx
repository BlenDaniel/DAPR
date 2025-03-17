"use client";

import { tw } from "@/app/helpers/tw";
import { styled } from "@/app/helpers/styled";

export const Testimonials = styled.div`
  ${tw(`max-w-screen-lg mx-auto w-full px-4 sm:px-8 md:px-16 mb-12`)};
`;

export const Testimonial = styled.div`
  ${tw(
    `flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm mx-2 my-8`
  )};
`;

export const Image = styled.figure`
  ${tw(
    `w-20 h-20 mx-auto border-2 border-blue-400 rounded-full overflow-hidden -mt-12 mb-4 shadow-md`
  )};

  img {
    ${tw(`border-4 border-white rounded-full object-cover w-full h-full`)};
  }
`;

export const Title = styled.h3`
  ${tw(`font-semibold text-lg text-black mb-2`)};
`;

export const QuoteIcon = styled.div`
  ${tw(`text-4xl text-blue-200 mb-4`)};
`;

export const Content = styled.div`
  ${tw(`text-black italic mb-4 leading-relaxed`)};
`;

export const Company = styled.div`
  ${tw(`text-sm text-black mt-2`)};
`;

// New components for the updated Testimonials component
export const TestimonialsWrapper = styled.div`
  ${tw(`max-w-3xl mx-auto relative`)};
`;

export const SliderControls = styled.div`
  ${tw(`flex items-center justify-between`)};
`;

export const SliderButton = styled.button`
  ${tw(
    `bg-white rounded-full p-2 shadow-md text-gray-600 hover:text-blue-600 focus:outline-none z-10`
  )};
`;

export const TestimonialCard = styled.div`
  ${tw(`w-full mx-4 bg-white rounded-lg shadow-sm p-8 text-center`)};
`;

export const ImageContainer = styled.div`
  ${tw(
    `w-20 h-20 mx-auto border-2 border-blue-400 rounded-full overflow-hidden mb-4 shadow-md`
  )};
`;

export const Indicators = styled.div`
  ${tw(`flex justify-center mt-6`)};
`;

export const IndicatorDot = styled.button<{ active: boolean }>`
  ${tw(`w-3 h-3 mx-1 rounded-full focus:outline-none`)};
  ${({ active }) => (active ? tw(`bg-blue-500`) : tw(`bg-gray-300`))};
`;

export const LoadingContainer = styled.div`
  ${tw(`flex justify-center items-center h-40`)};
`;
