import Footer from "../../components/Footer";
import { useEffect, useRef, useState } from "react";
import LearningTyperViewModel from "./ViewModel";
import Header from "../../components/Header";

export default function LearningTyper() {
  const {
    loading,
    content,
    guide,
    index,
    itemsLength,
    fetchContent,
    handleNext,
  } = LearningTyperViewModel();

  const [userInputTitle, setUserInputTitle] = useState("");
  const [userInputSentence, setUserInputSentence] = useState("");
  const [isTitleCorrect, setIsTitleCorrect] = useState(true);
  const [isSentenceCorrect, setIsSentenceCorrect] = useState(true);
  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  const titleInputRef = useRef<HTMLInputElement>(null);
  const sentenceInputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    fetchContent(); // This line calls fetchContent when the component mounts
  }, []); // The dependency array includes fetchContent

  const speakText = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  // Function to check title correctness
  const checkTitleCorrectness = (input: string) => {
    const trimmedInput = input.trim();
    if (trimmedInput === "") {
      setIsTitleCorrect(true); // Reset if input is empty
      return;
    }

    // Check correctness letter by letter
    const correctTitle = content!.gerTitle.toLowerCase();
    const isCorrect =
      trimmedInput.toLowerCase() === correctTitle.slice(0, trimmedInput.length);
    setIsTitleCorrect(isCorrect);

    if (isCorrect && trimmedInput.length == correctTitle.length) {
      // Focus on the next input field when the title is correct
      if (sentenceInputRef.current) {
        sentenceInputRef.current.focus();
      }
    }
  };

  // Function to check sentence correctness
  const checkSentenceCorrectness = (input: string) => {
    const trimmedInput = input.trim();
    if (trimmedInput === "") {
      setIsSentenceCorrect(true); // Reset if input is empty
      return;
    }

    // Check correctness letter by letter
    const correctSentence = content!.gerSentence;
    const isCorrect =
      trimmedInput === correctSentence.slice(0, trimmedInput.length);
    setIsSentenceCorrect(isCorrect);

    if (isCorrect && trimmedInput.length == correctSentence.length) {
      handleNext();
      setUserInputTitle("");
      setUserInputSentence("");
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Simple loading state
  }

  if (!content) {
    return <div>No content available.</div>; // Handle case when no content is fetched
  }

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <Header />

      <main
        className={`flex w-full h-screen ${
          isDarkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        {/* Left Side Image */}
        <div
          className={`w-1/4 p-4 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded shadow h-full max-h-[calc(100vh-64px)] overflow-auto`}
        >
          {content.imageUrl && (
            <img
              src={content.imageUrl}
              alt="Content illustration"
              className="w-full h-auto"
            />
          )}
        </div>

        {/* Center Content */}
        <div
          className={`flex flex-col items-start justify-start w-1/2 px-12 py-7 relative ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {/* Title and English Sentence */}
          <div className="text-left mb-8 mt-11 w-3/4 ">
            <h1
              className={`text-6xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-800"
              } mb-2`}
              onClick={() => speakText(content.gerTitle)} // Speak German title on click
            >
              {content.engTitle}
            </h1>
            <p
              className={`text-3xl ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
              onClick={() => speakText(content.gerSentence)} // Speak German sentence on click
            >
              {content.engSentence}
            </p>
          </div>

          {/* Invisible Input for Title Translation */}
          <div className="relative mb-4 w-full">
            <input
              type="text"
              ref={titleInputRef} // Reference for title input
              className={`w-full h-full text-6xl bg-transparent border-none outline-none cursor-text ${
                isTitleCorrect
                  ? isDarkMode
                    ? "text-gray-200"
                    : "text-gray-800"
                  : "text-red-500"
              }`}
              value={userInputTitle}
              onChange={(e) => {
                setUserInputTitle(e.target.value);
                checkTitleCorrectness(e.target.value);
              }}
              placeholder="Type the German title..." // Placeholder text
              autoComplete="off" // Prevent browser autofill
            />
            {!isTitleCorrect &&
              userInputTitle && ( // Show hint only when incorrect and input is not empty
                <span className="absolute text-left inset-0 text-6xl text-gray-400 opacity-30 pointer-events-none">
                  {content?.gerTitle}{" "}
                  {/* Displaying the correct title as a hint */}
                </span>
              )}
          </div>

          {/* Invisible Input for Sentence Translation */}
          <div className="relative mb-4 w-full h-full">
            <textarea
              ref={sentenceInputRef} // Reference for sentence input
              className={`w-full text-3xl bg-transparent border-none outline-none cursor-text ${
                isSentenceCorrect
                  ? isDarkMode
                    ? "text-gray-300"
                    : "text-gray-600"
                  : "text-red-500"
              }`}
              value={userInputSentence}
              onChange={(e) => {
                setUserInputSentence(e.target.value);
                checkSentenceCorrectness(e.target.value);
              }}
              placeholder="Type the German sentence..." // Placeholder text
              autoComplete="off" // Prevent browser autofill
              rows={10} // Start with one row
              wrap="soft" // Allow soft wrapping of text
              style={{
                resize: "none",
              }} // Disable manual resizing and hide overflow
            />
            {/* Show hint only when incorrect and user has typed something */}
            {!isSentenceCorrect && userInputSentence && (
              <span className="absolute text-left inset-0 text-3xl text-gray-400 opacity-30 pointer-events-none">
                {content?.gerSentence}{" "}
                {/* Displaying the correct sentence as a hint */}
              </span>
            )}
          </div>

          {/* Next Button */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2">
            <span className={` ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"} font-semibold`}>
              {index}/{itemsLength}
            </span>
            <button
              onClick={() => {
                handleNext();
                setUserInputTitle("");
                setUserInputSentence("");
              }}
              className={`px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
              }`}
            >
              {index === itemsLength ? "Restart" : "Next"}
            </button>
            {/* Dark Mode Toggle Button as an Emoji */}
            <button
              onClick={toggleDarkMode}
              aria-label={
                isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            >
              {isDarkMode ? "☀️" : "🌙"}{" "}
              {/* Sun for Light Mode, Moon for Dark Mode */}
            </button>
          </div>
        </div>

        {/* Right Side Guide */}
        <div
          className={`w-1/4 p-4 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded shadow h-full max-h-[calc(100vh - 64px)] overflow-auto`}
        >
          {guide ? (
            guide.type === "image" ? (
              <img
                src={guide.content}
                alt={guide.title}
                className="w-full h-auto"
              />
            ) : (
              <>
                <h3 className={`font-bold ${isDarkMode ? "text-white" : ""}`}>
                  {guide.title}
                </h3>
                <p className={`${isDarkMode ? "text-gray-300" : ""}`}>
                  {guide.content}
                </p>
              </>
            )
          ) : (
            <p>Loading guide...</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
