"use client";
import { useState } from "react";
import ReactDropzone from "react-dropzone";
import { toast } from "sonner";
import { Images as ImagesIcon } from "lucide-react";
import { FileVideo as FileVideoIcon } from "lucide-react";

type CustomDropZoneProps = {
  handleUpload: (files: File) => void;
  acceptedFiles: { [key: string]: string[] };
  disabled?: boolean;
  type?: "images" | "video";
};

export const CustomDropZone = ({
  handleUpload,
  acceptedFiles,
  disabled,
  type = "images",
}: CustomDropZoneProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleHover = (): void => setIsHover(true);
  const handleExitHover = (): void => setIsHover(false);
  const onDrop = (files: File[]) => {
    handleUpload(files[0]);
    handleExitHover();
  };
  const onDropRejected = () => {
    handleExitHover();
    toast.error("Error uploading your file(s)", {
      description: "Allowed Files: Audio, Video and Images.",
      duration: 5000,
    });
  };
  const onError = () => {
    handleExitHover();
    toast.error("Error uploading your file(s)", {
      description: "Allowed Files: Audio, Video and Images.",
      duration: 5000,
    });
  };

  return (
    <ReactDropzone
      disabled={disabled}
      onDrop={onDrop}
      onDragEnter={handleHover}
      onDragLeave={handleExitHover}
      accept={acceptedFiles}
      onDropRejected={onDropRejected}
      multiple={false}
      onError={onError}
    >
      {({ getRootProps, getInputProps }) => (
        <div
          {...getRootProps()}
          className={`${
            isHover ? "border-black bg-gray-100/80" : "border-default-gray"
          } flex w-full cursor-pointer flex-col items-center justify-center py-6 ${
            disabled ? "cursor-not-allowed" : ""
          }`}
        >
          <input {...getInputProps()} />
          {type === "images" ? (
            <ImagesIcon size={80} />
          ) : (
            <FileVideoIcon size={80} />
          )}
          <h3 className="mt-5 text-center font-semibold">
            Click to select
            <br />
            or
            <br />
            drop your {type} here
          </h3>
        </div>
      )}
    </ReactDropzone>
  );
};
