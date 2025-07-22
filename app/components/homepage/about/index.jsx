// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
          
          {/* Enhanced with external resources */}
          <div className="mt-6 space-y-4">
            <p className="text-gray-300 text-sm lg:text-base">
              My work focuses on the intersection of{" "}
              <a 
                href="https://blog.langchain.dev/what-is-agentic-ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#16f2b3] hover:text-pink-500 transition-colors underline"
              >
                agentic AI research
              </a>{" "}
              and practical automation solutions. I&apos;m particularly interested in{" "}
              <a 
                href="https://openai.com/research/gpt-4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#16f2b3] hover:text-pink-500 transition-colors underline"
              >
                large language model applications
              </a>{" "}
              and{" "}
              <a 
                href="https://arxiv.org/abs/2308.11432" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#16f2b3] hover:text-pink-500 transition-colors underline"
              >
                multi-agent systems research
              </a>{" "}
              that can drive real-world impact.
            </p>
          </div>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Teja Telagathoti"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;