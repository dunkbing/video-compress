import clsx from "clsx";
import { useState } from "react";

export type Format = "png" | "jpg" | "webp" | "selectAll";

type ConverterProps = {
  onFormatChange?: (formats: Format[]) => void;
};

const FormatSelection = ({ onFormatChange }: ConverterProps) => {
  const [selectedFormats, setSelectedFormats] = useState<Format[]>(["webp"]);

  const handleFormatToggle = (format: Format) => {
    let newFormats: Format[] = [];
    if (format === "selectAll") {
      newFormats = ["png", "jpg", "webp"];
      setSelectedFormats(newFormats);
    } else {
      const updatedFormats = [...selectedFormats];
      const formatIndex = updatedFormats.indexOf(format);

      if (formatIndex !== -1) {
        updatedFormats.splice(formatIndex, 1);
      } else {
        updatedFormats.push(format);
      }

      newFormats = updatedFormats;
      setSelectedFormats(updatedFormats);
    }
    onFormatChange?.(newFormats);
  };

  return (
    <div className="h-fit space-y-2 rounded-2xl border border-gray-200 bg-gray-100 px-4 py-3">
      <label>Formats</label>
      <div className="flex flex-row space-x-2">
        <button
          className={clsx("btn", {
            "btn-accent": selectedFormats.includes("png"),
          })}
          onClick={() => handleFormatToggle("png")}
        >
          PNG
        </button>
        <button
          className={clsx("btn", {
            "btn-accent": selectedFormats.includes("jpg"),
          })}
          onClick={() => handleFormatToggle("jpg")}
        >
          JPG
        </button>
        <button
          className={clsx("btn", {
            "btn-accent": selectedFormats.includes("webp"),
          })}
          onClick={() => handleFormatToggle("webp")}
        >
          WebP
        </button>
        <button
          className={clsx("btn", {
            "btn-accent": selectedFormats.length === 3,
          })}
          onClick={() => handleFormatToggle("selectAll")}
        >
          All
        </button>
      </div>
    </div>
  );
};

export default FormatSelection;
