import axios from "axios";
import Content from "../../types/Content";
import Guide from "../../types/Guide";



const API_URL = "http://localhost:8080/api/v1/";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Methods"] =
  "GET, POST, PUT, DELETE";
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Content-Type";

class UnusedContentService {
  private lastFetchedList: string[] = []; // Track the IDs of previously fetched content
  private allContent: Content[] = []; // Store all fetched content

  // Fetch all content once and store it
  async fetchAllContent(): Promise<Content[]> {
    try {
      const response = await axios.get<Content[]>(API_URL + "content");
      this.allContent = response.data; // Assuming response.data is an array of Content
      return this.allContent;
    } catch (error) {
      console.error("Error fetching all content:", error);
      throw error; // Propagate error
    }
  }

  // Get random content while keeping track of previously fetched IDs
  async getRandomContent(): Promise<Content> {
    if (this.allContent.length === 0) {
      await this.fetchAllContent(); // Fetch all if not already fetched
    }

    let randomItem: Content;
    do {
      const randomIndex = Math.floor(Math.random() * this.allContent.length);
      randomItem = this.allContent[randomIndex];
    } while (this.lastFetchedList.includes(randomItem.id)); // Ensure it's not in the last fetched list

    // Add the newly fetched item ID to the lastFetchedList
    this.lastFetchedList.push(randomItem.id);
    
    // Limit the size of lastFetchedList to avoid memory issues
    if (this.lastFetchedList.length > 5) { // Keep track of only the last 5 fetched items
      this.lastFetchedList.shift(); // Remove the oldest entry
    }

    return randomItem; // Return the randomly selected content
  }

  // Fetch specific content by ID
  async getContentById(id: string): Promise<Content> {
    try {
      const response = await axios.get<Content>(API_URL + "content/" + id);
      return response.data; // Assuming response.data is the Content object
    } catch (error) {
      console.error(`Error fetching content with ID ${id}:`, error);
      throw error; // Propagate error
    }
  }

  // Fetch guide by ID
  async getGuideById(id: string): Promise<Guide> {
    try {
      const response = await axios.get<Guide>(API_URL + "guide/" + id);
      return response.data; // Assuming response.data is the Guide object
    } catch (error) {
      console.error(`Error fetching guide with ID ${id}:`, error);
      throw error; // Propagate error
    }
  }

  // Fetch all guides (if needed)
  async fetchAllGuides(): Promise<Guide[]> {
    try {
      const response = await axios.get<Guide[]>(API_URL + "guide");
      return response.data; // Assuming response.data is an array of Guides
    } catch (error) {
      console.error("Error fetching all guides:", error);
      throw error; // Propagate error
    }
  }
}

export default new UnusedContentService();