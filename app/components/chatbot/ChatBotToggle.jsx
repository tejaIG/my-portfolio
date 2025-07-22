"use client";

import { useState } from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa";

const ChatBotToggle = ({ onClick, isOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-40">
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#16f2b3] to-[#13c99a] hover:from-[#13c99a] hover:to-[#16f2b3] text-black shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-110 ${
          isOpen ? 'rotate-180' : ''
        }`}
        title={isOpen ? "Close chat" : "Chat with Teja's AI assistant"}
      >
        {isOpen ? (
          <FaTimes size={20} className="transition-transform duration-300" />
        ) : (
          <FaCommentDots size={20} className="transition-transform duration-300" />
        )}
        
        {/* Animated pulse ring */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-[#16f2b3] animate-ping opacity-20"></div>
        )}
        
        {/* Notification dot */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
            !
          </div>
        )}
        
        {/* Hover tooltip */}
        {isHovered && !isOpen && (
          <div className="absolute bottom-16 right-0 bg-[#1a1443] text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg border border-[#464c6a] transform transition-all duration-200">
            Hey! I&apos;m Teja&apos;s assistant 🤖
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#1a1443]"></div>
          </div>
        )}
      </button>
    </div>
  );
};

export default ChatBotToggle;