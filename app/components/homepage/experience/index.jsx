// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import experience from '/public/lottie/code.json';

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                experiences.map(experience => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
        
        {/* Industry Resources Section */}
        <div className="mt-12 pt-8 border-t border-[#25213b]">
          <div className="text-center mb-6">
            <h3 className="text-lg text-white mb-3">Industry Resources & Research</h3>
            <p className="text-gray-300 text-sm max-w-2xl mx-auto">
              Stay updated with the latest in AI research and industry developments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <a 
              href="https://anthropic.com/research" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg border border-[#1f223c] bg-[#11152c] hover:border-violet-500 transition-all duration-300"
            >
              <span className="text-[#16f2b3] text-sm font-medium mb-1">Anthropic Research</span>
              <span className="text-gray-400 text-xs text-center">AI Safety & Constitutional AI</span>
            </a>
            
            <a 
              href="https://arxiv.org/list/cs.AI/recent" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg border border-[#1f223c] bg-[#11152c] hover:border-violet-500 transition-all duration-300"
            >
              <span className="text-[#16f2b3] text-sm font-medium mb-1">arXiv AI Papers</span>
              <span className="text-gray-400 text-xs text-center">Latest AI Research Publications</span>
            </a>
            
            <a 
              href="https://huggingface.co/blog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg border border-[#1f223c] bg-[#11152c] hover:border-violet-500 transition-all duration-300"
            >
              <span className="text-[#16f2b3] text-sm font-medium mb-1">Hugging Face Blog</span>
              <span className="text-gray-400 text-xs text-center">ML Engineering & Models</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;