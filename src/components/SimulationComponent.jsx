import React from "react";

const SimulationComponent = ({ url }) => {
    return (
        <div className="simulation-container p-4 bg-white rounded shadow-md">
            {/* Tailwind classes:
          p-4: adds padding,
          bg-white: white background,
          rounded: rounded corners,
          shadow-md: medium box-shadow for elevation */}
            <iframe
                src={url}
                title="Simulation"
                className="w-full h-96 border-0"
                // Tailwind classes:
                // w-full: width 100%
                // h-96: fixed height (adjust as needed)
                // border-0: no border
            ></iframe>
        </div>
    );
};

export default SimulationComponent;
