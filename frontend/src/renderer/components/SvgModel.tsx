import React, { useRef, useCallback } from "react";

interface SvgModelProps {
  svgPath: string; // Path to the SVG file
}

const SvgModel: React.FC<SvgModelProps> = ({ svgPath }) => {
  const svgRef = useRef<HTMLImageElement | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const svg = svgRef.current;
    if (!svg) return;

    const { left, top, width, height } = svg.getBoundingClientRect();
    const offsetX = e.clientX - (left + width / 2);
    const offsetY = e.clientY - (top + height / 2);

    const maxOffset = 10; // Maximum shift in pixels
    const shiftX = Math.min(Math.max(-maxOffset, -offsetX / 20), maxOffset);
    const shiftY = Math.min(Math.max(-maxOffset, -offsetY / 20), maxOffset);

    svg.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const svg = svgRef.current;
    if (svg) {
      svg.style.transform = "translate(0, 0)";
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#dfe3e6",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={svgRef}
        src={svgPath}
        alt="SVG Model"
        style={{ transition: "transform 0.1s ease-out", width: '200px', height: '300px' }} // Adjust size as needed
      />
    </div>
  );
};

export default SvgModel;
