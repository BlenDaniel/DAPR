import Content from "../../types/Content";
import Guide from "../../types/Guide";
import letter1 from "../../data/translations/letter1.json"; // Adjust path as necessary

import guideData from "../../data/translations/guide.json"; // Adjust path as necessary
class ContentService {
  private currentIndex: number = 0; // Track the current index of content being displayed
  private lastFetchedList: Set<string> = new Set(); // Track the IDs of previously fetched content
  private allContent: Content[] = letter1; // Load all content from the local JSON
  private allGuides: Guide[] = guideData; // Load all guides from the local JSON
  
  getRandomContent(): [Content | null, number, number] {
    if (this.allContent.length === 0) {
      throw new Error("No content available");
    }
  
    // Check if all items have been fetched
    if (this.lastFetchedList.size === this.allContent.length) {
      this.lastFetchedList.clear(); // Clear last fetched list for a new cycle
      this.currentIndex = 0; // Reset to the first item
    }
  
    // Find the next item to display based on currentIndex
    const currentItem: Content = this.allContent[this.currentIndex];
  
    // Add the current item ID to the last fetched list
    this.lastFetchedList.add(currentItem.id);
  
    // Increment the index for the next call
    this.currentIndex++;
  
    return [currentItem, this.currentIndex, this.allContent.length]; // Return the currently selected content
  }
  // Fetch specific content by ID
  getContentById(id: string): Content | undefined {
    return this.allContent.find((content) => content.id === id); // Find content by ID
  }

  // Fetch guide by ID
  getGuideById(id: string): Guide | undefined {
    return this.allGuides.find((guide) => guide.id === id); // Find guide by ID
  }


  // Fetch all guides (if needed)
  fetchAllGuides(): Guide[] {
    return this.allGuides; // Return all guides
  }
}

export default new ContentService();
