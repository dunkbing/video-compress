import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => (
  <footer className="bg-white pb-6 pt-10 md:pb-10 md:pt-20">
    <div className="mx-auto flex flex-col items-center justify-center">
      <Link href="/" className="flex items-center gap-2">
        <Image alt="logo" src={"/logo.svg"} width={40} height={40} />
        <p className="font-semibold">TinyIMG</p>
      </Link>
      <p className="pt-4 text-sm text-gray-500">
        No © 2024 Compress Videos and Images for Free
      </p>
    </div>
    <div className="flex justify-center divide-x-2 pt-10 text-sm font-medium text-gray-600">
      <Link className="pr-3" href="/about">
        About
      </Link>
      <Link href="/image" className="px-3">
        Image Compression
      </Link>
      <Link href="/video" className="px-3">
        Video Compression
      </Link>
    </div>
  </footer>
);

const navigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Video", href: "#" },
    { name: "Contact us", href: "#" },
  ],
};

export default Footer;
