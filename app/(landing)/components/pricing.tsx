import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const Pricing = () => (
  <div className="px-6 lg:px-0" id="pricing">
    <div className="flex flex-col items-center justify-between rounded-xl border p-3 md:flex-row">
      <div className="p-6">
        <p className="mb-3 text-xl font-semibold md:text-3xl">
          Pricing? We Reimagined It
        </p>
        <p className="mb-6 text-sm text-gray-500 md:text-base">
          Free forever, open-source video & image compression.
          <br className="hidden md:block" />
          Own your data, deploy anywhere.
        </p>
        <div className="grid sm:grid-cols-2">
          {pricing.map(({ id, name }) => (
            <div key={id} className="mb-3 flex gap-2 ">
              <Check className="w-4 text-black" />
              <p className="text-sm text-gray-500">{name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2x  w-full rounded-2xl border border-gray-200 bg-white/40 p-10 text-center shadow-sm md:w-1/3">
        <p className="text-lg font-semibold">Free,Forever</p>
        <div className="flex items-end justify-center pb-8 pt-4">
          <span className="text-4xl font-semibold">$0</span>
          <div>/month</div>
        </div>
        <Link href="/#compress" className="btn btn-primary">
          Compress Now
        </Link>
        <p className="pt-4 text-xs">
          All of our code base is free and
          <br />
          open source.
        </p>
      </div>
    </div>
  </div>
);

const pricing = [
  { id: 1, name: "Unlimited file size" },
  { id: 2, name: "Unlimited conversion minutes" },
  { id: 3, name: "Unlimited files at a time" },
  { id: 3, name: "No Ads" },
];
export default Pricing;
