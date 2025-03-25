import React from "react";
import TabManager from "./components/TabManager.jsx";
import ContentContainer from "./components/ContentContainer.jsx";
import "./App.css"; // Optional: for components-specific styling

const App = () => {
    return (
        <div className="App">
            <header className="app-header">
                <h1>Maths VLab Study Page</h1>
            </header>
            <main className="app-content">
                {/* TabManager handles open topic tabs */}
                <TabManager />
                {/* ContentContainer dynamically loads and displays content */}
                <ContentContainer />
            </main>
        </div>
    );
};

export default App;
