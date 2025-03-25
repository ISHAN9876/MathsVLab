import React, { createContext, useState } from "react";

export const TabContext = createContext();

export const TabProvider = ({ children }) => {
    const [openTabs, setOpenTabs] = useState([]);

    const openTopic = (topic) => {
        if (!openTabs.includes(topic)) {
            setOpenTabs([...openTabs, topic]);
        }
    };

    const closeTopic = (topic) => {
        setOpenTabs(openTabs.filter((t) => t !== topic));
    };

    return (
        <TabContext.Provider value={{ openTabs, openTopic, closeTopic }}>
            {children}
        </TabContext.Provider>
    );
};
