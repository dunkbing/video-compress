import Hero from "./components/hero";
import Features from "./components/features";
import Faq from "./components/faq";
import CTA from "./components/cta";
import Footer from "~/components/Footer";
import dynamic from "next/dynamic";

const CompressImage = dynamic(
  () => import("~/app/(compress)/components/image"),
  {
    ssr: false,
  }
);

const Page = () => (
  <>
    <div className="mx-auto max-w-5xl space-y-16 pt-32 sm:space-y-32">
      <Hero />
      <div id="compress" className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-10 px-6 pb-10 lg:grid lg:h-[calc(100dvh-130px)] lg:grid-cols-8 lg:px-0">
          <CompressImage />
        </div>
      </div>
      <div className="space-y-6 sm:space-y-16">
        <Features />
      </div>
      <Faq />
      <CTA />
    </div>
    <Footer />
  </>
);

export default Page;
