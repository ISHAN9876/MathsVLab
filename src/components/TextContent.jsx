import React from "react";

const TextContent = ({ content }) => {
    return (
        <div className="text-content p-4 bg-white rounded shadow-md">
            <p>{content}</p>
        </div>
    );
};

export default TextContent;
