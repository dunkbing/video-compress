import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="left-6 right-6 top-0 z-30 py-6 pb-0 lg:left-8 lg:right-8 lg:pt-8">
      <div className="nav-bar mx-auto flex w-full max-w-5xl items-center justify-between rounded-2xl bg-gray-50/90 p-3 backdrop-blur-lg sm:grid sm:grid-cols-3 lg:p-4">
        <Link href="/" className="flex items-center gap-2">
          <Image alt="logo" src={"/logo.svg"} width={60} height={60} />
          <p className="font-semibold sm:text-xl">TinyIMG</p>
        </Link>
        <div className="hidden items-center justify-center gap-4 sm:flex">
          <Link href="/#features" className="text-sm opacity-50">
            Features
          </Link>
          <Link href="/#pricing" className="text-sm opacity-50">
            Pricing
          </Link>
          <Link href="/#faq" className="text-sm opacity-50">
            Faq
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <Link href="/#compress" className="btn btn-primary">
            Compress Now
          </Link>
        </div>
      </div>
    </nav>
  );
};
