import Link from "next/link";
import React from "react";

const Hero = () => (
  <div className="px-6 lg:px-0">
    <h1 className="lg text-balance text-center text-4xl font-bold text-gray-900 md:text-5xl lg:text-7xl lg:font-semibold">
      Compress Videos and Images for Free
    </h1>
    <h2 className="max-w mx-auto mt-9 max-w-xl text-center text-gray-500 sm:text-lg">
      Say goodbye to bulky files! Crush video sizes by{" "}
      <span className="font-medium text-black">90%</span> with no quality loss,
      even offline. And the best part?{" "}
      <span className="font-medium text-black">It&apos;s free!</span>
    </h2>
    <div className="mt-10 flex items-center justify-center gap-4">
      <Link href="/#compress" className="btn btn-primary">
        Compress images
      </Link>
      <Link href="/#compress" className="btn btn-secondary">
        Compress video
      </Link>
    </div>
  </div>
);

export default Hero;
