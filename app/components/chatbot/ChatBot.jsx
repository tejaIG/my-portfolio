"use client";

import { useState, useEffect, useRef } from "react";
import { FaTimes, FaPaperPlane, FaRobot, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { isValidEmail } from "@/utils/check-email";
import emailjs from "@emailjs/browser";
import axios from "axios";

const ChatBot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [conversationStep, setConversationStep] = useState("greeting");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: ""
  });
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      setTimeout(() => {
        addBotMessage("Hey there! 👋 I'm Teja's AI assistant (well, not really AI, but I pretend to be smart! 🤖)");
        setTimeout(() => {
          addBotMessage("I'm here to help you get in touch with Teja and learn about his awesome AI projects. Ready to chat? 😊");
          setTimeout(() => {
            addBotMessage("First things first - what should I call you? (Don't worry, I won't judge if it's something like 'CodeMaster3000' 😄)");
          }, 1500);
        }, 1000);
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (message) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { type: "bot", message, timestamp: new Date() }]);
      setIsTyping(false);
    }, Math.random() * 1000 + 500); // Random delay for realistic feel
  };

  const addUserMessage = (message) => {
    setMessages(prev => [...prev, { type: "user", message, timestamp: new Date() }]);
  };

  const handleSendMessage = () => {
    if (!currentInput.trim()) return;

    const message = currentInput.trim();
    addUserMessage(message);
    setCurrentInput("");

    // Process message based on conversation step
    processConversation(message);
  };

  const processConversation = (message) => {
    switch (conversationStep) {
      case "greeting":
        setUserInfo(prev => ({ ...prev, name: message }));
        setTimeout(() => {
          addBotMessage(`Nice to meet you, ${message}! 🎉 That's a great name ${message.length > 10 ? '(quite impressive, actually!)' : '(short and sweet!)'}`);
          setTimeout(() => {
            addBotMessage("Now, I need your email so Teja can get back to you. Don't worry, he won't spam you with cat memes... probably 😸");
          }, 1500);
        }, 800);
        setConversationStep("email");
        break;

      case "email":
        if (!isValidEmail(message)) {
          setTimeout(() => {
            addBotMessage("Hmm, that doesn't look like a valid email 🤔 Did you forget the @ symbol? Try again! (I promise I'm not judging your typing skills)");
          }, 800);
          return;
        }
        setUserInfo(prev => ({ ...prev, email: message }));
        setTimeout(() => {
          addBotMessage("Perfect! ✅ That email looks legit (unlike my jokes).");
          setTimeout(() => {
            addBotMessage("Now for the fun part - what kind of project are you thinking about? Pick one:");
            setTimeout(() => {
              addBotMessage("🤖 AI Agent Development\n💼 Automation System\n🧠 Machine Learning Model\n🌐 Web Application\n💬 AI Consultation\n🎯 Something else amazing");
            }, 1000);
          }, 1500);
        }, 800);
        setConversationStep("projectType");
        break;

      case "projectType":
        setUserInfo(prev => ({ ...prev, projectType: message }));
        setTimeout(() => {
          const responses = [
            "Ooh, that sounds exciting! 🚀",
            "Nice choice! 💪",
            "Great pick! 🎯",
            "Love it! 🔥",
            "Awesome! 🌟"
          ];
          const randomResponse = responses[Math.floor(Math.random() * responses.length)];
          addBotMessage(`${randomResponse} ${message.toLowerCase().includes('ai') ? 'AI projects are my favorite!' : 'Teja loves working on projects like this!'}`);
          
          setTimeout(() => {
            addBotMessage("What's your budget range? (Don't worry, Teja's not going to buy a yacht with it... yet 🛥️)");
            setTimeout(() => {
              addBotMessage("💰 $1,000 - $5,000\n💰💰 $5,000 - $10,000\n💰💰💰 $10,000 - $25,000\n💰💰💰💰 $25,000+\n🤝 Let's discuss it!");
            }, 1000);
          }, 1500);
        }, 800);
        setConversationStep("budget");
        break;

      case "budget":
        setUserInfo(prev => ({ ...prev, budget: message }));
        setTimeout(() => {
          addBotMessage(message.toLowerCase().includes('discuss') ? 
            "Smart choice! The best projects often need custom solutions 🧠" : 
            "Got it! Thanks for being upfront about the budget 💪");
          setTimeout(() => {
            addBotMessage("Last question, I promise! Tell me more about your project. What problem are you trying to solve? (The more details, the better Teja can help!)");
          }, 1500);
        }, 800);
        setConversationStep("details");
        break;

      case "details":
        setUserInfo(prev => ({ ...prev, message: message }));
        setTimeout(() => {
          addBotMessage("Fantastic! 🎉 I've got all the info I need. Let me send this to Teja right away!");
          setTimeout(() => {
            sendToTeja();
          }, 1000);
        }, 800);
        setConversationStep("complete");
        break;

      default:
        setTimeout(() => {
          addBotMessage("Thanks for chatting! Feel free to start a new conversation anytime 😊");
        }, 800);
        break;
    }
  };

  const sendToTeja = async () => {
    try {
      setIsTyping(true);
      
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_nvpj2ga';
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_xqktj0n';
      const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'jrepOil3rqrwT5Msk' };

      const templateParams = {
        name: userInfo.name,
        email: userInfo.email,
        projectType: userInfo.projectType,
        budget: userInfo.budget,
        message: userInfo.message,
        subject: `Chatbot Inquiry from ${userInfo.name}`,
        project_details: `Project Type: ${userInfo.projectType}\nBudget: ${userInfo.budget}\n\nMessage: ${userInfo.message}\n\n(Sent via Chatbot)`
      };

      const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
      
      const emailRes = await emailjs.send(serviceID, templateID, templateParams, options);
      const teleRes = await axios.post(`${appUrl}/api/contact`, userInfo);

      setIsTyping(false);
      
      if (emailRes.status === 200 || teleRes.status === 200) {
        addBotMessage("🎉 Success! Your message has been sent to Teja. He'll get back to you within 24 hours (or sooner if he's had enough coffee ☕)");
        setTimeout(() => {
          addBotMessage("Thanks for using the chatbot! Feel free to check out Teja's portfolio while you wait 😊");
          setTimeout(() => {
            addBotMessage("Pro tip: The 'Close' button is up there ☝️ if you want to explore the website!");
          }, 2000);
        }, 2000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setIsTyping(false);
      addBotMessage("Oops! Something went wrong 😅 But don't worry, you can try the contact form on the website or reach out to Teja directly!");
      console.error("ChatBot send error:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const resetConversation = () => {
    setMessages([]);
    setConversationStep("greeting");
    setUserInfo({
      name: "",
      email: "",
      projectType: "",
      budget: "",
      message: ""
    });
    // Restart conversation
    setTimeout(() => {
      addBotMessage("Hey again! 👋 Ready for another chat? What should I call you?");
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-[#0d1224] border border-[#464c6a] rounded-xl w-full max-w-md h-[600px] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#464c6a] bg-gradient-to-r from-[#16f2b3] to-[#13c99a] rounded-t-xl">
          <div className="flex items-center gap-3">
            <FaRobot className="text-black text-xl" />
            <div>
              <h3 className="text-black font-semibold">Teja's Assistant</h3>
              <p className="text-black text-xs opacity-80">Usually online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {conversationStep === "complete" && (
              <button
                onClick={resetConversation}
                className="text-black hover:text-gray-600 transition-colors text-sm bg-white bg-opacity-20 px-2 py-1 rounded"
              >
                Restart
              </button>
            )}
            <button
              onClick={onClose}
              className="text-black hover:text-gray-600 transition-colors"
            >
              <FaTimes size={18} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  msg.type === "user"
                    ? "bg-[#16f2b3] text-black"
                    : "bg-[#1a1443] text-white border border-[#464c6a]"
                }`}
              >
                <div className="flex items-start gap-2">
                  {msg.type === "bot" && <FaRobot className="text-[#16f2b3] mt-1 flex-shrink-0" />}
                  {msg.type === "user" && <FaUser className="text-black mt-1 flex-shrink-0" />}
                  <div className="whitespace-pre-line text-sm">{msg.message}</div>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-[#1a1443] text-white border border-[#464c6a] p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <FaRobot className="text-[#16f2b3]" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-[#16f2b3] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#16f2b3] rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-[#16f2b3] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        {conversationStep !== "complete" && (
          <div className="p-4 border-t border-[#464c6a]">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-[#10172d] border border-[#353a52] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-[#16f2b3] outline-none transition-colors"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!currentInput.trim() || isTyping}
                className="bg-[#16f2b3] hover:bg-[#13c99a] disabled:bg-gray-600 disabled:cursor-not-allowed text-black p-2 rounded-lg transition-colors"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBot;