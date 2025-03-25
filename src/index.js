import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { TabProvider } from "./context/TabContext.js";

// Get the root element and throw an error if not found
const container = document.getElementById("root");
if (!container) {
    throw new Error("Root element not found. Ensure your index.html has a div with id='root'.");
}

// Create a React root and render the app within a context provider
const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
        <TabProvider>
            <App />
        </TabProvider>
    </React.StrictMode>
);
