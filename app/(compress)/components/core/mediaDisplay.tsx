import React from "react";

type VideoDisplayProps = {
  mediaUrl: string;
  mediaType: "video" | "image";
};

export const VideoDisplay = ({ mediaUrl, mediaType }: VideoDisplayProps) => (
  <>
    {mediaType === "video" ? (
      <video
        id="compress-video-player"
        className="h-full w-full rounded-3xl"
        controls
      >
        <source src={mediaUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ) : (
      <img src={mediaUrl} className="h-full w-full rounded-3xl" alt="Media" />
    )}
  </>
);
