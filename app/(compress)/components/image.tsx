"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import { acceptedImageFiles } from "~/utils/formats";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL } from "@ffmpeg/util";
import { toast } from "sonner";

import convertFile from "~/utils/convert";
import { VideoDisplay } from "./core/videoDisplay";
import { CustomDropZone } from "./core/customDropZone";
import { VideoInputDetails } from "./core/videoInputDetails";
import { VideoInputControl } from "./core/videoInputControl";
import { VideoOutputDetails } from "./core/videoOutputDetails";
import { VideoCompressProgress } from "./core/videoCompressProgress";
import { VideoTrim } from "./core/videoTrim";
import {
  FileActions,
  QualityType,
  VideoFormats,
  VideoInputSettings,
} from "~/types";
import { motion, AnimatePresence } from "framer-motion";

const CompressImage = () => {
  const [mediaFile, setMediaFile] = useState<FileActions>();
  const [progress, setProgress] = useState<number>(0);
  const [time, setTime] = useState<{
    startTime?: Date;
    elapsedSeconds: number;
  }>({ elapsedSeconds: 0 });
  const [status, setStatus] = useState<
    "notStarted" | "converted" | "compressing"
  >("notStarted");
  const [videoSettings, setVideoSettings] = useState<VideoInputSettings>({
    quality: QualityType.High,
    videoType: VideoFormats.MP4,
    customEndTime: 0,
    customStartTime: 0,
    removeAudio: false,
  });
  const ffmpegRef = useRef(new FFmpeg());
  const disableDuringCompression = status === "compressing";

  useEffect(() => {
    let timer: any;

    if (time?.startTime) {
      timer = setInterval(() => {
        const endTime = new Date();
        const timeDifference = endTime.getTime() - time.startTime!.getTime();
        setTime({ ...time, elapsedSeconds: timeDifference });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [time]);

  const handleUpload = (file: File) => {
    setMediaFile({
      fileName: file.name,
      fileSize: file.size,
      from: file.name.slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2),
      fileType: file.type,
      file,
      isError: false,
    });
  };

  const compress = async () => {
    if (!mediaFile) return;
    try {
      setTime({ ...time, startTime: new Date() });
      setStatus("compressing");
      ffmpegRef.current.on("progress", ({ progress: completion }) => {
        const percentage = completion * 100;
        setProgress(percentage);
      });
      ffmpegRef.current.on("log", ({ message }) => {
        console.log(message);
      });
      const { url, output, outputBlob } = await convertFile(
        ffmpegRef.current,
        mediaFile,
        videoSettings
      );
      setMediaFile({
        ...mediaFile,
        url,
        output,
        outputBlob,
      });
      setTime((oldTime) => ({ ...oldTime, startTime: undefined }));
      setStatus("converted");
      setProgress(0);
    } catch (err) {
      console.log(err);
      setStatus("notStarted");
      setProgress(0);
      setTime({ elapsedSeconds: 0, startTime: undefined });
      toast.error("Error Compressing Video");
    }
  };

  const load = async () => {
    const ffmpeg = ffmpegRef.current;
    await ffmpeg.load({
      coreURL: await toBlobURL(
        `${process.env.NEXT_PUBLIC_URL}/download/ffmpeg-core.js`,
        "text/javascript"
      ),
      wasmURL: await toBlobURL(
        `${process.env.NEXT_PUBLIC_URL}/download/ffmpeg-core.wasm`,
        "application/wasm"
      ),
    });
  };

  const loadWithToast = () => {
    toast.promise(load, {
      loading: "Downloading necessary packages from FFmpeg for offline use.",
      success: () => {
        return "All necessary file downloaded";
      },
      error: "Error loading FFmpeg packages",
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => loadWithToast(), []);

  return (
    <>
      <motion.div
        layout
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        key="drag"
        transition={{ type: "tween" }}
        className="col-span-5 flex w-full rounded-3xl border bg-gray-50/35 md:h-full"
      >
        {mediaFile ? (
          <VideoDisplay videoUrl={URL.createObjectURL(mediaFile.file)} />
        ) : (
          <CustomDropZone
            acceptedFiles={acceptedImageFiles}
            handleUpload={handleUpload}
          />
        )}
      </motion.div>
      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          key="size"
          transition={{ type: "tween" }}
          className="relative col-span-3 flex h-full w-full rounded-3xl border bg-gray-50/35 p-4"
        >
          <div className="flex w-full flex-col gap-4">
            {mediaFile && (
              <>
                <VideoInputDetails
                  onClear={() => window.location.reload()}
                  videoFile={mediaFile}
                />
                <VideoTrim
                  disable={disableDuringCompression}
                  onVideoSettingsChange={setVideoSettings}
                  videoSettings={videoSettings}
                />
              </>
            )}
            <VideoInputControl
              disabled={disableDuringCompression}
              onVideoSettingsChange={setVideoSettings}
              videoSettings={videoSettings}
            />
            <motion.div
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              key="button"
              transition={{ type: "tween" }}
              className="h-fit rounded-2xl border border-gray-200 bg-gray-100 p-3"
            >
              {status === "compressing" && (
                <VideoCompressProgress
                  progress={progress}
                  seconds={time.elapsedSeconds}
                />
              )}

              {(status === "notStarted" || status === "converted") && (
                <button
                  onClick={compress}
                  type="button"
                  className="btn btn-primary relative w-full text-sm font-medium transition duration-500 ease-in-out"
                >
                  Compress
                </button>
              )}
            </motion.div>
            {status === "converted" && mediaFile && (
              <VideoOutputDetails
                timeTaken={time.elapsedSeconds}
                videoFile={mediaFile}
              />
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default CompressImage;
