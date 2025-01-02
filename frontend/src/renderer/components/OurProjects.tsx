import pilot1 from "../../../assets/image1.svg";
import pilot2 from "../../../assets/image2.svg";
import pilot3 from "../../../assets/image3.svg";
import pilot4 from "../../../assets/image1.svg";
import pilot5 from "../../../assets/image1.svg";
import pilot6 from "../../../assets/image1.svg";
import pilot7 from "../../../assets/image1.svg";
import pilot8 from "../../../assets/image1.svg";
import pilot9 from "../../../assets/image1.svg";
import pilot10 from "../../../assets/image1.svg";


export const OurProjects = () => {
  const images = [
    pilot1, pilot2, pilot3, pilot4, pilot5, pilot6, pilot7, pilot8, pilot9, pilot10
  ];

  return (
    <div className="container mx-auto px-6 py-14 sm:py-28">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
        Our Projects
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div className="relative group" key={index}>
            <img
              src={image}
              alt={`Project ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-end rounded-lg">
              <button className="mb-4 px-4 py-2 bg-primary text-white text-sm rounded-md">
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
