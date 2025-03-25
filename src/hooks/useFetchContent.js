import { useQuery } from "@tanstack/react-query";
import axios from "axios";

/**
 * Fetches content data for a given topic.
 * @param {string} topic - The topic ID or name to fetch content for.
 * @returns {Promise} - Promise resolving to the content data.
 */
const fetchContent = async (topic) => {
    // If no topic is provided, return null (or throw an error if preferred)
    if (!topic) return null;

    // Make a GET request to the backend API to fetch content for the topic
    const response = await axios.get(`/api/topics/${topic}`);
    return response.data;
};

/**
 * Custom hook to fetch content using React Query.
 * @param {string} topic - The topic to fetch content for.
 * @returns {Object} - Returns React Query's result object (data, error, isLoading, etc.).
 */
const useFetchContent = (topic) => {
    return useQuery(
        // Query key includes the topic, so that data is cached per topic
        ["content", topic],
        () => fetchContent(topic),
        {
            enabled: !!topic, // Only run the query if a topic is provided
            // Optionally, you can set additional React Query options here (e.g., staleTime, cacheTime)
        }
    );
};

export default useFetchContent;
