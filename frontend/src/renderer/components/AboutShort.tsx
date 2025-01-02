import pilot1 from "../../../assets/image1.svg";
import pilot2 from "../../../assets/image2.svg";
import pilot3 from "../../../assets/image3.svg";

export const AboutShort = () => {
  return (
    <div className="container mx-auto px-6 py-14 sm:py-28">
    <div className="bg-muted/50 border rounded-lg py-10 sm:py-16 max-w-7xl px-6 sm:px-12">
      <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center">
        <div className="w-full md:w-1/3 flex justify-center">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-2">
                <img
                  src={pilot1}
                  alt="Image 1"
                  className="w-full h-[200px] object-cover rounded-lg"
                />
                <img
                  src={pilot3}
                  alt="Image 3"
                  className="w-full h-[200px] object-cover rounded-lg"
                />
              </div>
              <img
                src={pilot2}
                alt="Image 2"
                className="w-[full] h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 flex flex-col items-start">
            <div className="pb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
               
                Company
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mt-4 text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
