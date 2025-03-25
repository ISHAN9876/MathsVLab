import React from "react";

const VideoPlayer = ({ url }) => {
    return (
        <div className="video-player p-4 bg-white rounded shadow-md">
            <video className="w-full rounded" controls>
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
