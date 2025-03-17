"use client";

import { styled } from "@/app/helpers/styled";
import { tw } from "@/app/helpers/tw";

export const ContactFormWrapper = styled.div`
  ${tw(`max-w-3xl mx-auto`)}
`;

export const FormTitle = styled.h2`
  ${tw(`text-2xl font-bold mb-6 text-center`)}
`;

export const FormSubtitle = styled.p`
  ${tw(`text-gray-600 mb-8 text-center`)}
`;

export const Form = styled.form`
  ${tw(`space-y-6`)}
`;

export const FormGroup = styled.div`
  ${tw(`flex flex-col`)}
`;

export const Label = styled.label`
  ${tw(`text-sm font-medium mb-1`)}
`;

export const Input = styled.input`
  ${tw(
    `px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`
  )}
`;

export const Textarea = styled.textarea`
  ${tw(
    `px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[150px]`
  )}
`;

export const SubmitButton = styled.button`
  ${tw(
    `w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`
  )}
`;

export const ContactInfoSection = styled.div`
  ${tw(`mt-12 pt-12 border-t border-gray-200`)}
`;

export const ContactInfoTitle = styled.h3`
  ${tw(`text-xl font-bold mb-6 text-center`)}
`;

export const ContactInfoGrid = styled.div`
  ${tw(`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`)}
`;

export const ContactInfoCard = styled.div`
  ${tw(
    `bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center`
  )}
`;

export const ContactInfoIcon = styled.div`
  ${tw(`text-blue-600 text-2xl mb-3`)}
`;

export const ContactInfoLabel = styled.h4`
  ${tw(`font-bold mb-2`)}
`;

export const ContactInfoValue = styled.p`
  ${tw(`text-gray-600`)}
`;

export const ErrorMessage = styled.p`
  ${tw(`text-red-500 text-sm mt-1`)}
`;

export const SuccessMessage = styled.div`
  ${tw(
    `bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6`
  )}
`;
