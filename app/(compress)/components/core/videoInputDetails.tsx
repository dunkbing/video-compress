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
        <p className="">File Input</p>
        <button
          onClick={onClear}
          type="button"
          className="btn btn-secondary btn-sm"
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
