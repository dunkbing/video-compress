import {
  Film,
  FileVideo,
  ImageDown,
  ScissorsLineDashed,
  Tangent,
  FileType,
} from "lucide-react";
import React from "react";

const Features = () => (
  <div
    className="mx-auto grid  gap-x-4 gap-y-20 px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-0"
    id="features"
  >
    {features.map(({ description, title, icon }) => (
      <div
        key={description}
        className="flex flex-col items-center justify-center gap-8 text-center"
      >
        {icon}
        <div>
          <p className="pb-4 font-medium">{title}</p>
          <p className="max-w-sm text-balance text-gray-500">{description}</p>
        </div>
      </div>
    ))}
  </div>
);

const features = [
  {
    icon: (
      <FileVideo className="h-12 w-12 rounded-lg bg-gray-200/50 p-3 text-gray-900" />
    ),
    title: "Video Compression",
    description:
      "Experience the magic of shrinking video sizes by up to 90% without compromising on pristine image and audio quality. Enjoy compact files that retain their visual fidelity.",
  },
  {
    icon: (
      <ImageDown className="h-12 w-12 rounded-lg bg-gray-200/50 p-3 text-gray-900" />
    ),
    title: "Image Compression",
    description:
      "Optimize your image files with our advanced compression technology, reducing file sizes without compromising on quality for faster uploads and downloads.",
  },
  {
    icon: (
      <Film className="h-12 w-12 rounded-lg bg-gray-200/50 p-3 text-gray-900" />
    ),
    title: "Versatile Format Support",
    description:
      "Embrace compatibility with our support for popular video formats like MP4 and WebM, ensuring seamless playback across various devices and platforms.",
  },
  {
    icon: (
      <ScissorsLineDashed className="h-12 w-12 rounded-lg bg-gray-200/50 p-3 text-gray-900" />
    ),
    title: "Trim Video",
    description:
      "Take control of your video content by effortlessly removing unwanted segments with our precise start and end point selection feature.",
  },
  {
    icon: (
      <Tangent className="h-12 w-12 rounded-lg bg-gray-200/50 p-3 text-gray-900" />
    ),
    title: "Intuitive Interface",
    description:
      "Discover the joy of video compression with our user-friendly interface, designed to make the process simple and accessible for all, regardless of technical skill level.",
  },
  {
    icon: (
      <FileType className="h-12 w-12 rounded-lg bg-gray-200/50 p-3 text-gray-900" />
    ),
    title: "Image Format Conversion",
    description:
      "Easily convert your images to different formats, ensuring compatibility with various platforms and devices for a seamless user experience.",
  },
];

export default Features;
