import React from "react";

const VideoPlayer = ({ src, url }) => {
  return (
    <>
      <video controls width="250">
        <source src={src} type="video/webm" />
        <a href={url}>MP4</a>
        video.
      </video>
    </>
  );
};

export default VideoPlayer;
