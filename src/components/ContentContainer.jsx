import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TabContext } from "../context/TabContext.js";
import VideoPlayer from "./VideoPlayer.jsx";
import TextContent from "./TextContent.jsx";
import SimulationEmbed from "./SimulationEmbed.jsx";
import QuizComponent from "./QuizComponent.jsx";

const ContentContainer = () => {
    // Retrieve the currently selected topic from context
    const { currentTopic } = useContext(TabContext);

    // Use React Query to fetch content for the selected topic
    const { data, isLoading, error } = useQuery(
        ["content", currentTopic],
        () => axios.get(`/api/topics/${currentTopic}`).then((res) => res.data),
        {
            enabled: !!currentTopic, // Only fetch if currentTopic is set
        }
    );

    // Helper function to render content based on its type
    const renderContent = (section) => {
        switch (section.type) {
            case "video":
                return <VideoPlayer url={section.url} key={section.url} />;
            case "text":
                return <TextContent content={section.content} key={section.content.slice(0, 20)} />;
            case "simulation":
                return <SimulationEmbed url={section.url} key={section.url} />;
            case "quiz":
                return (
                    <QuizComponent
                        questions={section.questions}
                        key={section.questions[0]?.question || "quiz"}
                    />
                );
            default:
                return null;
        }
    };

    // If no topic is selected, prompt the user to select one
    if (!currentTopic) {
        return (
            <div className="flex justify-center items-center h-full p-4">
                {/* Tailwind: Center content with flexbox */}
                <p className="text-lg text-gray-600">
                    Please select a topic to view its content.
                </p>
            </div>
        );
    }

    // Loading state
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-full p-4">
                {/* Tailwind: Center text and style with text-gray-600 */}
                <p className="text-lg text-gray-600">Loading content...</p>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="flex justify-center items-center h-full p-4">
                {/* Tailwind: Display error message in red */}
                <p className="text-lg text-red-500">
                    Error loading content. Please try again later.
                </p>
            </div>
        );
    }

    return (
        <div className="content-container mx-auto p-4">
            {/* Tailwind: mx-auto centers the container, p-4 applies padding */}
            {data.sections && data.sections.map((section) => renderContent(section))}
        </div>
    );
};

export default ContentContainer;
