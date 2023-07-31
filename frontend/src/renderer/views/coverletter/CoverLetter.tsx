import Header from "../../components/Header";
import CoverLetterModel from "./ViewModel";
import { useEffect } from "react";

export default function CoverLetter() {
  const { checkCurrentUser } =
  CoverLetterModel();

  useEffect(() => {
    checkCurrentUser();
  }, []);

 

  return (
    <>
    <Header />
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
        <div className="text-center pb-8">

          <div className="mt-5">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Welcome
            </h3>
          </div>
        </div>

        <p className="text-center">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </a>
        </p>
      </div>
    </main>
    </>
  );
}
