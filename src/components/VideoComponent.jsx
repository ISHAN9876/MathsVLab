import React from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

/**
 * VideoComponent
 * Uses ReactPlayer to provide a feature-rich video player.
 * @param {string} url - The URL of the video to stream.
 */
const VideoComponent = ({ url }) => {
    return (
        <div className="video-component p-4 bg-white rounded shadow-md">
            {/*
        ReactPlayer is a robust components that supports various video formats
        and sources, providing built-in controls and responsive behavior.
      */}
            <ReactPlayer
                url={url}
                width="100%"
                height="100%"
                controls={true}        // Show video controls (play, pause, etc.)
                playing={false}        // Auto-play disabled; user initiates playback
                light={false}          // Set to true to display a preview thumbnail
                className="rounded"    // Tailwind: rounded corners for a polished look
            />
        </div>
    );
};

VideoComponent.propTypes = {
    url: PropTypes.string.isRequired,
};

export default VideoComponent;
