import { BadgeCheck } from "lucide-react";
import { FileActions } from "~/types";
import {
  bytesToSize,
  calculateBlobSize,
  reduceSize,
} from "~/utils/bytesToSize";
import { formatTime } from "~/utils/convert";
import { motion } from "framer-motion";
type VideoOutputDetailsProps = {
  videoFile: FileActions;
  timeTaken?: number;
};

export const VideoOutputDetails = ({
  videoFile,
  timeTaken,
}: VideoOutputDetailsProps) => {
  const outputFileSize = calculateBlobSize(videoFile.outputBlob);
  const { sizeReduced, percentage } = reduceSize(
    videoFile.fileSize,
    videoFile.outputBlob
  );

  const download = () => {
    if (!videoFile?.url) return;
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = videoFile.url;
    a.download = videoFile.output;
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(videoFile.url);
    document.body.removeChild(a);
  };

  return (
    <motion.div
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      key="output"
      transition={{ type: "tween" }}
      className="h-fit rounded-2xl border border-gray-200 bg-gray-100 px-4 py-3"
    >
      <div className="text-sm">
        <div className="mb-2 flex items-center justify-between border-b pb-2">
          <div className="flex items-center gap-1">
            <p className="">Output File</p>
            <BadgeCheck className="rounded-full text-white" fill="#000000" />
          </div>
          <button
            onClick={download}
            type="button"
            className="relative rounded-lg bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-950 to-zinc-950 px-2.5 py-1.5 text-sm font-medium text-white/90 transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 "
          >
            Download
          </button>
        </div>

        <div className="mb-2 flex items-center justify-between border-b pb-2">
          <p className="font-semibold">New file size</p>
          <p className="font-semibold">{outputFileSize}</p>
        </div>
        <div className="mb-2 flex items-center justify-between border-b pb-2">
          <p className="font-semibold">Size Reduced %</p>
          <p className="font-semibold">{percentage}%</p>
        </div>
        <div className="mb-2 flex items-center justify-between border-b pb-2">
          <p>Original file size</p>
          <p>{bytesToSize(videoFile.fileSize)}</p>
        </div>
        <div className="mb-2 flex items-center justify-between border-b pb-2">
          <p>Size reduced</p>
          <p>{sizeReduced}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Time taken</p>
          <p>{timeTaken ? formatTime(timeTaken / 1000) : "-"}</p>
        </div>
      </div>
    </motion.div>
  );
};
