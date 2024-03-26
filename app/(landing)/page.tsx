import Hero from "./components/hero";
import Features from "./components/features";
import Faq from "./components/faq";
import TrustedBy from "./components/trustedBy";
import CTA from "./components/cta";
import Footer from "~/components/Footer";
import dynamic from "next/dynamic";

const CompressVideo = dynamic(
  () => import("~/app/(compress)/components/compress"),
  {
    ssr: false,
  }
);

const Page = () => (
  <>
    <div className="max-w-5xl mx-auto pt-32 space-y-16 sm:space-y-32">
      <Hero />
      <div id="compress" className="max-w-5xl mx-auto pt-32">
        <div className="lg:grid lg:grid-cols-8 gap-10 lg:h-[calc(100dvh-130px)] pb-10 px-6 lg:px-0 flex flex-col">
          <CompressVideo />
        </div>
      </div>
      <div className="space-y-6 sm:space-y-16">
        <TrustedBy />
        <Features />
      </div>
      <Faq />
      <CTA />
    </div>
    <Footer />
  </>
);

export default Page;
