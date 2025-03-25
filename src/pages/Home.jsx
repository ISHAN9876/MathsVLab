import React, { useContext } from "react";
import { TabContext } from "../context/TabContext.js";

const Home = () => {
    const { openTab } = useContext(TabContext);

    // Sample topics for demonstration.
    const topics = [
        "calculus-limits",
        "algebra-equations",
        "geometry-shapes",
    ];

    return (
        <div className="home-container p-4">
            {/* Tailwind: p-4 adds padding */}
            <h1 className="text-3xl font-bold mb-4">
                Welcome to Maths VLab Study Page
            </h1>
            <p className="text-lg mb-6">
                Please select a topic to start your learning journey:
            </p>
            <ul className="space-y-3">
                {/* Tailwind: space-y-3 adds vertical spacing between items */}
                {topics.map((topic) => (
                    <li key={topic}>
                        <button
                            onClick={() => openTab(topic)}
                            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                        >
                            {/* Replace hyphens with spaces for display */}
                            {topic.replace(/-/g, " ")}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
