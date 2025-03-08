import React from "react";

interface Props {
  content: string;
}

const FormatHtml: React.FC<Props> = ({ content }) => {
  if (typeof content !== "string") {
    console.warn("FormatHtml: content prop must be a string");
    return null;
  }

  return (
    <span
      className="format-html"
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
};

export default FormatHtml;
