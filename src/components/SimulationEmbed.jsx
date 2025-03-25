import React from "react";

const SimulationEmbed = ({ url }) => {
    return (
        <div className="simulation-embed p-4 bg-white rounded shadow-md">
            <iframe src={url} title="Simulation" className="w-full h-96 border-0"></iframe>
        </div>
    );
};

export default SimulationEmbed;
