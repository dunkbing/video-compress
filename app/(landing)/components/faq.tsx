import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const Faq = () => (
  <div className="px-6 lg:px-0" id="faq">
    <p className="text-center text-xl font-semibold md:text-3xl">
      Frequently asked questions
    </p>
    <p className=" mx-auto mt-4 max-w-3xl text-balance text-center text-gray-500 md:mt-9 md:text-lg">
      Have a different question and can’t find the answer you’re looking for?
      Reach out to our support team by sending us an email and we’ll get back to
      you as soon as we can.
    </p>
    <div className="mt-8 border-t md:mt-16">
      <Accordion type="single" collapsible className="w-full">
        {FAQ.map(({ description, title }) => (
          <AccordionItem value={title} key={title}>
            <AccordionTrigger className="text-left text-black/70 md:py-6 md:text-lg">
              {title}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-black/70 text-gray-500">
              {description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
);

export default Faq;

const FAQ = [
  {
    title: "How Long Does It Take to Compress a Video or Image?",
    description: (
      <div>
        <p className="text-gray-700">
          The time it takes to compress media depends on several factors:
        </p>
        <ul className="mt-2 list-disc pl-4">
          <li className="text-gray-700">
            <b>Media size:</b> Larger files naturally take longer to compress.
          </li>
          <li className="text-gray-700">
            <b>Desired compression level:</b> Aiming for a smaller file size
            typically requires more processing time.
          </li>
          <li className="text-gray-700">
            <b>Hardware capabilities:</b> Faster processors and more RAM will
            accelerate the compression process.
          </li>
        </ul>
        <p className="mt-2 text-gray-700">
          Therefore, it&apos;s difficult to provide a definitive answer without
          knowing these specifics. However, compression time can range from{" "}
          <b>seconds for small clips or images</b> on powerful computers to{" "}
          <b>hours for large video files or high-resolution images</b> on slower
          machines.
        </p>
      </div>
    ),
  },
  {
    title: "Where are Compressed Videos and Images Saved?",
    description:
      "When you compress media using a web-based tool, the compressed version won't be saved directly on your computer unless you download it manually.",
  },
  {
    title: "What types of media can be compressed with this tool?",
    description:
      "This tool supports video and image compression, allowing you to optimize various types of media files for faster uploads and downloads.",
  },
  {
    title: "What Video and Image Formats Can be Compressed with this Tool?",
    description:
      "This tool is designed to handle a wide range of video and image formats, ensuring compatibility and efficient compression for your media files.",
  },
  {
    title:
      "Are There Compatibility Limitations with Different Operating Systems?",
    description:
      "This tool is web-based, meaning it should function on most devices and operating systems as long as they have a modern web browser with internet access.",
  },
  {
    title: "How is my data protected during the compression process?",
    description:
      "Your data is safeguarded throughout the compression process because the tool operates offline and is open-source. This means that the media remains within your system, and all processing occurs locally in your browser.",
  },
  {
    title: "Are there any plans to add new features to the tool in the future?",
    description:
      "Yes, we have plans to incorporate new features based on community needs. Additionally, we welcome pull requests, so if you have a specific feature in mind, you can contribute to the development. Alternatively, you can fork the repository and add features according to your requirements.",
  },
];
