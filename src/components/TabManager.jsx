import React, { useContext } from "react";
import { TabContext } from "../context/TabContext.js";

const TabManager = () => {
    const { openTabs, currentTopic, setCurrentTopic, closeTab } = useContext(TabContext);

    // If no topics are open, show a simple message.
    if (!openTabs || openTabs.length === 0) {
        return (
            <div className="p-4">
                <p className="text-gray-600">No topics open. Please select a topic.</p>
            </div>
        );
    }

    return (
        <div className="tab-manager flex space-x-2 border-b border-gray-300 p-2">
            {/* Tailwind:
            flex: displays tabs in a row,
            space-x-2: horizontal spacing between tabs,
            border-b: bottom border for tab bar,
            p-2: padding */}
            {openTabs.map((tab) => (
                <div
                    key={tab}
                    className={`tab-item flex items-center px-4 py-2 cursor-pointer rounded-t 
            ${currentTopic === tab ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
                    // On clicking a tab, update the current topic.
                    onClick={() => setCurrentTopic(tab)}
                >
                    <span className="mr-2">{tab}</span>
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent tab switch when clicking close
                            closeTab(tab);
                        }}
                        className="text-sm text-red-600 hover:text-red-800"
                    >
                        ×
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TabManager;
