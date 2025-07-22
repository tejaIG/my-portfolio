// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* AI Technology Resources Section */}
      <div className="mt-12 mb-8">
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <h3 className="text-lg text-white mb-4">Explore Leading AI Technologies</h3>
            <p className="text-gray-300 text-sm max-w-2xl mx-auto mb-6">
              Learn more about the cutting-edge AI frameworks and platforms I work with daily
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <a 
            href="https://python.langchain.com/docs/introduction/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg border border-[#1f223c] bg-[#11152c] hover:border-violet-500 transition-all duration-300 hover:scale-105"
          >
            <span className="text-[#16f2b3] text-sm font-medium">LangChain</span>
            <span className="text-gray-400 text-xs mt-1">Framework Docs</span>
          </a>
          
          <a 
            href="https://docs.crewai.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg border border-[#1f223c] bg-[#11152c] hover:border-violet-500 transition-all duration-300 hover:scale-105"
          >
            <span className="text-[#16f2b3] text-sm font-medium">CrewAI</span>
            <span className="text-gray-400 text-xs mt-1">Multi-Agent</span>
          </a>
          
          <a 
            href="https://docs.n8n.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg border border-[#1f223c] bg-[#11152c] hover:border-violet-500 transition-all duration-300 hover:scale-105"
          >
            <span className="text-[#16f2b3] text-sm font-medium">n8n</span>
            <span className="text-gray-400 text-xs mt-1">Automation</span>
          </a>
          
          <a 
            href="https://platform.openai.com/docs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg border border-[#1f223c] bg-[#11152c] hover:border-violet-500 transition-all duration-300 hover:scale-105"
          >
            <span className="text-[#16f2b3] text-sm font-medium">OpenAI</span>
            <span className="text-gray-400 text-xs mt-1">API Docs</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;