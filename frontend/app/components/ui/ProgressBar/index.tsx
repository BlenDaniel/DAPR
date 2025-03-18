import React from "react";

interface Props {
  title: string;
  percentage: number;
}

const getLevels = (): string[] => {
  return ["Basic", "Good", "Skilled", "Advanced", "Excellent"];
};

const getSkillLevel = (percentage: number): number => {
  return Math.ceil(percentage / 20);
};

// Helper to get dot color based on level and index
const getDotClasses = (active: boolean, index: number): string => {
  if (!active) return "bg-white border border-gray-300";

  // Different colors based on level
  switch (index) {
    case 0:
      return "bg-blue-300 border border-blue-300";
    case 1:
      return "bg-blue-400 border border-blue-400";
    case 2:
      return "bg-blue-500 border border-blue-500";
    case 3:
      return "bg-blue-600 border border-blue-600";
    case 4:
      return "bg-blue-700 border border-blue-700";
    default:
      return "bg-blue-500 border border-blue-500";
  }
};

// Helper to get progress line background
const getProgressBackground = (level: number): string => {
  switch (level) {
    case 1:
      return "bg-blue-300"; // Basic
    case 2:
      return "bg-gradient-to-r from-blue-300 to-blue-400"; // Good
    case 3:
      return "bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500"; // Skilled
    case 4:
      return "bg-gradient-to-r from-blue-300 via-blue-400 via-blue-500 to-blue-600"; // Advanced
    case 5:
      return "bg-gradient-to-r from-blue-300 via-blue-400 via-blue-500 via-blue-600 to-blue-700"; // Excellent
    default:
      return "bg-blue-500"; // Default
  }
};

const ProgressBar: React.FC<Props> = ({ title, percentage }) => {
  const level = getSkillLevel(percentage);
  const levels = getLevels();

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-100 h-full flex flex-col">
      <div className="w-full flex justify-between items-center">
        <h3 className="font-semibold text-black text-base">{title}</h3>
      </div>
      <div className="w-full mt-4 flex-grow flex flex-col justify-center">
        <div className="w-full flex justify-between mb-1">
          {levels.map((levelText, index) => (
            <span
              key={index}
              className={`text-[10px] mb-1 font-medium text-center ${
                index < level ? "text-blue-600" : "text-gray-400"
              }`}
            >
              {levelText}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between w-full relative h-4 before:content-[''] before:absolute before:left-0 before:right-0 before:top-1/2 before:h-1 before:bg-gray-200 before:z-0">
          <div
            className={`absolute left-0 top-1/2 h-1 z-0 transform -translate-y-1/2 ${getProgressBackground(
              level
            )}`}
            style={{ width: `${level * 20}%` }}
          ></div>
          {[0, 1, 2, 3, 4].map((dotIndex) => (
            <div
              key={dotIndex}
              className={`w-4 h-4 rounded-full transition-colors duration-300 relative z-10 shadow-sm ${getDotClasses(
                dotIndex < level,
                dotIndex
              )}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
