import Link from "next/link";
import React from "react";

const CTA = () => (
  <div className="px-6 pb-16 lg:px-0 lg:pb-32">
    <div className="rounded-2xl bg-base-300 px-3.5 py-9 text-black/90 md:py-20">
      <p className="text-center text-xl font-semibold md:text-3xl">
        Compress today for Free
      </p>
      <p className="text-slate/70 mx-auto mt-6 text-balance text-center text-sm md:max-w-2xl md:text-base">
        That&apos;s right, our video compression is free to use, forever!
        We&apos;re committed to open-source principles, meaning our code is
        freely available for you to inspect, modify, and even deploy on your own
        server if you prefer.
      </p>
      <div className="mt-9 flex justify-center">
        <Link href="/#compress" className="btn btn-primary">
          Compress Now
        </Link>
      </div>
    </div>
  </div>
);

export default CTA;
