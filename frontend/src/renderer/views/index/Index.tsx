import { AboutShort } from "../../components/AboutShort";
import Footer from "../../components/Footer";
import { OurProjects } from "../../components/OurProjects";
import Slideshow from "../../components/Slideshow";
import { MissionStatments } from "../../components/Mission";
import { FAQ } from "@/renderer/components/FAQ";

function Index() {
  return (
    <>
      <Slideshow
        companyName={"Daniel Assefa"}
        otherText={"Practicing Architecture"}
      />
      <AboutShort />
      <div>
        <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
          <div className="space-y-4 flex-1 sm:text-center lg:text-left">
            <h1 className="text-black font-bold text-4xl xl:text-5xl">
              HEY! Are you looking, FOR connecting
              <span className="text-indigo-900"> with your kinda people?</span>
            </h1>
            <p className="text-gray-800 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
              Find Like-Minded Individuals Who Are Currently Involved In The
              Things You Love And Make Meaningful Connections!
            </p>
            <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
              <a
                href="/register"
                className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                Get started
              </a>
              <a
                href="/login"
                className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto">
                I am already a member
              </a>
            </div>
          </div>
          <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
            <img
              src="https://www.pngplay.com/wp-content/uploads/6/Big-Community-PNG-Clipart-Background.png"
              className="w-full mx-auto sm:w-10/12  lg:w-full"
            />
          </div>
        </section>
      </div>
      <OurProjects />
      <MissionStatments />
      <FAQ />
      <Footer />
    </>
  );
}

export default Index;
