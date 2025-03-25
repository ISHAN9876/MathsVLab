import React from "react";

const TextComponent = ({ content }) => {
    return (
        <div className="text-component p-4 bg-white rounded shadow-md">
            {/* Tailwind CSS classes:
            - p-4: Adds padding
            - bg-white: White background
            - rounded: Rounded corners
            - shadow-md: Medium shadow for elevation */}
            <div className="text-content text-base text-gray-800">
                {content}
            </div>
        </div>
    );
};

export default TextComponent;
