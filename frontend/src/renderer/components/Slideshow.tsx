import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import React, { useCallback, useRef, useState } from "react";
import logo from "../../../assets/front-icon.svg";

interface Project {
  id: number;
  name: string;
  image: string;
}

const projects: Project[] = [
  { id: 1, name: "Project 1", image: "../../../assets/image1.svg" },
  { id: 2, name: "Project 2", image: "../../../assets/image2.svg" },
  { id: 3, name: "Project 3", image: "../../../assets/image3.svg" },
];

interface SlideshowProps {
  companyName: string;
  otherText: string;
}

const Slideshow: React.FC<SlideshowProps> = ({ companyName, otherText }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100">
      {/* Left side with company name and navigation */}
      <div className="w-full md:w-4/12 flex flex-col justify-center items-start ml-10 p-8">
        <img src={logo} alt="Logo" className="h-36 w-36 pb-8" />
        <div className="max-w-md">
          <h1 className="text-4xl md:text-6xl text-left font-bold mb-4 text-gray-300">
            {companyName}
          </h1>
          <h1 className="text-4xl md:text-6xl text-left font-bold mb-8">
            {otherText}
          </h1>
          <div className="flex mt-6 space-x-4">
            <button
              onClick={prevSlide}
              className="items-center px-3 py-1 border h-10 w-10 hover:bg-gray-200"
            >
              <ArrowLeftIcon className="h-3 w-3" />
            </button>
            <button
              onClick={nextSlide}
              className="items-center px-3 py-1 border h-10 w-10 hover:bg-gray-200"
            >
              <ArrowRightIcon className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Right side with project image and button */}
      <div
        className="w-full md:w-8/12 relative h-[300px] md:h-[500px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
        ref={svgRef}
          src={projects[currentSlide].image}
          alt={projects[currentSlide].name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-1/8 bg-white bg-opacity-90">
          <button className="w-full text-xl md:text-xl font-semibold text-black hover:text-white hover:bg-black transition-colors duration-300 py-4 px-8 border-2 ">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
