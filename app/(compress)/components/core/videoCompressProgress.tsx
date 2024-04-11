import { Loader, XCircle } from "lucide-react";
import { Progress } from "~/components/ui/progress";
import { formatTime } from "~/utils/convert";

type VideoCompressProgressProps = {
  seconds: number;
  progress: number;
};

export const VideoCompressProgress = ({
  progress,
  seconds,
}: VideoCompressProgressProps) => (
  <div className="flex items-center justify-between gap-2 p-0.5">
    <div className="flex-1">
      <div className="mb-2 flex justify-between text-sm">
        <div className="flex items-center gap-2">
          {progress ? <p>Compressing</p> : <p>Loading Video</p>}
          <Loader className="h-4 w-4 animate-spin" />
        </div>
        <p className="text-sm">{formatTime(seconds / 1000)}</p>
      </div>
      <Progress value={progress} />
    </div>
  </div>
);
