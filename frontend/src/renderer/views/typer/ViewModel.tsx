import { useState } from "react";
import ContentService from "../../../services/content/ContentService";
import Content from "../../../types/Content";
import Guide from "../../../types/Guide";

interface LearningTyperModel {
  loading: boolean;
  index: number;
  itemsLength: number;
  content: Content | null; // Use Content type
  guide: Guide | null; // Use Guide type
  fetchContent: () => void;
  handleNext: () => void;
}

export default function LearningTyperViewModel(): LearningTyperModel {
  const [loading, setLoading] = useState<boolean>(false);
  const [index, setCurrentItem] = useState<number>(0);
  const [itemsLength, setTotalLength] = useState<number>(0);
  const [content, setContent] = useState<Content | null>(null);
  const [guide, setGuide] = useState<Guide | null>(null);

  const fetchContent = async () => {
    setLoading(true);
    try {
      const [response, currentIndex, totalLength] =
        await ContentService.getRandomContent(); // Fetch random content

      if (response) {
        setContent(response); // Assuming response is of type Content
        setCurrentItem(currentIndex);
        setTotalLength(totalLength);
        // Fetch the guide based on guideId from the content if it's not null
        const guideResponse = ContentService.getGuideById(response.guideId);
        setGuide(guideResponse!); // Assuming response is of type Guide
      } else {
        console.error("No content returned");
        setContent(null); // Clear content if no valid response
        setGuide(null); // Clear guide as well
      }

      console.log("At least I am called:");
    } catch (error) {
      console.error("Error fetching content:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNext = async () => {
    try {
      setContent(null); // Clear content if no valid response
      setGuide(null); // Clear guide as well
      await fetchContent(); // Re-fetch content and guide for the next item
    } catch (error) {
      console.error("Error fetching next content:", error);
      // Optionally, you can show a notification or message to the user here
    }
  };

  return {
    loading,
    content,
    guide,
    index,
    itemsLength,
    fetchContent,
    handleNext,
  };
}
