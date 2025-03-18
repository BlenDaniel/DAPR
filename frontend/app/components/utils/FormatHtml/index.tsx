"use client";

import React, { useEffect, useState } from "react";

interface Props {
  content?: string;
  contentType?: string;
}

// Simple fetch function for content
const fetchContentFromAPI = async (contentType: string): Promise<string> => {
  try {
    // Fetch from the API endpoint
    const response = await fetch(`/api/${contentType}`);
    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error(`Error fetching ${contentType}:`, error);
    return "";
  }
};

const FormatHtml: React.FC<Props> = ({ content, contentType }) => {
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    // If contentType is provided, fetch content from API
    if (contentType) {
      const getContent = async () => {
        const fetchedContent = await fetchContentFromAPI(contentType);
        setHtmlContent(fetchedContent);
      };
      getContent();
    } else if (content) {
      // Use provided content directly
      setHtmlContent(content);
    }
  }, [content, contentType]);

  if (!htmlContent && !contentType) {
    console.warn(
      "FormatHtml: either content or contentType prop must be provided"
    );
    return null;
  }

  return (
    <div
      className="format-html text-black leading-relaxed prose prose-p:mb-4 prose-p:text-black prose-a:text-blue-600 prose-a:underline prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-4 prose-ul:text-black prose-ol:list-decimal prose-ol:pl-5 prose-ol:mb-4 prose-ol:text-black prose-strong:text-black prose-em:text-black"
      dangerouslySetInnerHTML={{
        __html: htmlContent,
      }}
    />
  );
};

export default FormatHtml;
