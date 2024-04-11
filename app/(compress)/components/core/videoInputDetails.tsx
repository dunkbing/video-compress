import React from "react";
import { FileActions } from "~/types";
import { bytesToSize } from "~/utils/bytesToSize";
import { motion } from "framer-motion";

type VideoInputDetailsProps = {
  videoFile: FileActions;
  onClear: () => void;
};

export const VideoInputDetails = ({
  videoFile,
  onClear,
}: VideoInputDetailsProps) => (
  <motion.div
    layout
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.8, opacity: 0 }}
    transition={{ type: "tween" }}
    key="details"
    className="h-fit rounded-2xl border border-gray-200 bg-gray-100 px-4 py-3"
  >
    <div className=" text-sm">
      <div className="mb-2 flex items-center justify-between border-b pb-2">
        <p className="">Fill Input</p>
        <button
          onClick={onClear}
          type="button"
          className="relative rounded-lg bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-950 to-zinc-950 px-2.5 py-1.5 text-sm font-medium text-white/90 transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2"
        >
          Clear
        </button>
      </div>
      <p className="mb-2 border-b pb-2">{videoFile?.fileName}</p>
      <div className="flex items-center justify-between">
        <p>File size</p>
        <p>{bytesToSize(videoFile.fileSize)}</p>
      </div>
    </div>
  </motion.div>
);
