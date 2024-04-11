const VideoDemo = () => (
  <div className="relative px-6">
    <video
      autoPlay
      loop
      playsInline
      preload="auto"
      className="h-full w-full overflow-clip rounded-3xl border-8 object-cover"
    >
      <source src="/demo.mp4" type="video/mp4" />
      <source src="/demo.webm" type="video/webm" />
    </video>
  </div>
);

export default VideoDemo;
