import Link from "next/link";
import React from "react";

const Hero = () => (
  <div className="pt-4 md:pt-8 px-6 lg:px-0">
    <div className="flex items-center gap-x-1.5 text-2 text-gray-600 border borer-gray-200 rounded-full px-3 py-1.5 mx-auto w-fit mb-8">
      <p className="text-sm sm:text-base">
        🎉 Free and open source on{" "}
        <a
          className="text-black font-medium"
          href="https://github.com/pranavp10/videocompress"
          target="_blank"
        >
          github -&gt;
        </a>
      </p>
    </div>
    <h1 className="text-center text-4xl font-bold md:text-5xl lg:text-7xl lg lg:font-semibold text-gray-900 text-balance">
      Compress Videos and Images for Free
    </h1>
    <h2 className="sm:text-lg max-w-xl mx-auto text-gray-500 max-w text-center mt-9">
      Say goodbye to bulky files! Crush video sizes by{" "}
      <span className="text-black font-medium">90%</span> with no quality loss,
      even offline. And the best part?{" "}
      <span className="text-black font-medium">It&apos;s free!</span>
    </h2>
    <div className="flex gap-4 items-center justify-center mt-10">
      <Link
        href="/#compress"
        className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-950 to-zinc-950 rounded-lg text-white/90 px-3.5 py-2.5 relative text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-500 focus:ring-zinc-950 flex-shrink-0"
      >
        Compress images
      </Link>
      <Link
        href="/#compress"
        className="border rounded-lg  px-3.5 py-2.5 relative text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-500 focus:ring-zinc-950 flex-shrink-0 flex items-center gap-2"
      >
        Compress video
      </Link>
    </div>
  </div>
);

export default Hero;
