import React from "react";
import { motion } from "framer-motion";

import { QualityType, VideoFormats, VideoInputSettings } from "~/types";

type VideoControlDetailsProps = {
  videoSettings: VideoInputSettings;
  onVideoSettingsChange: (value: VideoInputSettings) => void;
  disabled: boolean;
};

export const VideoInputControl = ({
  videoSettings,
  onVideoSettingsChange,
  disabled,
}: VideoControlDetailsProps) => (
  <motion.div
    layout
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.8, opacity: 0 }}
    transition={{ type: "tween" }}
    key="input"
    className="h-fit rounded-2xl border border-gray-200 bg-gray-100 px-4 py-3"
  >
    <div className="text-sm">
      <div className="mb-2 flex items-center justify-between border-b pb-2">
        <p>Remove Audio</p>
        <input
          type="checkbox"
          className="toggle"
          checked={videoSettings.removeAudio}
          disabled={disabled}
          onChange={(e) =>
            onVideoSettingsChange({
              ...videoSettings,
              removeAudio: e.target.checked,
            })
          }
        />
      </div>
      <div className="mb-2 flex items-center justify-between border-b pb-2">
        <p>Quality</p>
        <select
          disabled={disabled}
          value={videoSettings.quality}
          onChange={(e) => {
            const quality = e.target.value as QualityType;
            onVideoSettingsChange({ ...videoSettings, quality });
          }}
          className="select select-bordered select-sm"
        >
          {qualities.map(({ label, value }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center justify-between">
        <p>Format</p>
        <select
          disabled={disabled}
          value={videoSettings.videoType}
          onChange={(e) => {
            const videoType = e.target.value as VideoFormats;
            onVideoSettingsChange({ ...videoSettings, videoType });
          }}
          className="select select-bordered select-sm"
        >
          {formats.map(({ label, value }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  </motion.div>
);

const qualities: { label: string; value: QualityType }[] = [
  { label: "High", value: QualityType.High },
  { label: "Medium", value: QualityType.Medium },
  { label: "Low", value: QualityType.Low },
];

const formats: { label: string; value: VideoFormats }[] = [
  { label: "MP4 (.mp4)", value: VideoFormats.MP4 },
  { label: "MKV (.mkv)", value: VideoFormats.MKV },
  { label: "AVI (.avi)", value: VideoFormats.AVI },
  { label: "MOV (.mov)", value: VideoFormats.MOV },
  { label: "FLV (.flv)", value: VideoFormats.FLV },
  { label: "WEBM (.webm)", value: VideoFormats.WEBM },
];
