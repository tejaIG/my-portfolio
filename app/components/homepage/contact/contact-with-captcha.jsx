"use client";
// @flow strict
import { isValidEmail } from '@/utils/check-email';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { useState } from 'react';
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify';
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub, FaDownload, FaRocket } from "react-icons/fa";
import Link from 'next/link';
import { personalData } from '@/utils/data/personal-data';

function ContactWithCaptcha() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
    projectType: '',
    budget: '',
    timeline: '',
  });
  const [error, setError] = useState({
    email: false,
    required: false,
  });

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!input.email || !input.message || !input.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    const serviceID = 'service_nvpj2ga';
    const templateID = 'template_xqktj0n';
    const options = { publicKey: 'jrepOil3rqrwT5Msk' };

    // Enhanced template parameters for better lead qualification
    const templateParams = {
      ...input,
      subject: `New ${input.projectType || 'General'} Inquiry from ${input.name}`,
      project_details: `Project Type: ${input.projectType}\nBudget: ${input.budget}\nTimeline: ${input.timeline}\n\nMessage: ${input.message}`,
    };

    try {
      const res = await emailjs.send(serviceID, templateID, templateParams, options);
      const teleRes = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/contact`, input);

      if (res.status === 200 || teleRes.status === 200) {
        toast.success('🚀 Message sent successfully! I\'ll get back to you within 24 hours.');
        setInput({
          name: '',
          email: '',
          message: '',
          projectType: '',
          budget: '',
          timeline: '',
        });
      };
    } catch (error) {
      toast.error(error?.text || error);
    };
  };

  return (
    <div className="lg:col-span-2">
      {/* Call-to-Action Header */}
      <div className="mb-8 text-center lg:text-left">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-lg text-[#16f2b3] mb-2">
          Let&apos;s discuss your AI project and bring your ideas to life
        </p>
        <p className="text-[#d3d8e8] mb-6">
          I specialize in AI agents, automation systems, and cutting-edge AI solutions. 
          Whether you need a custom AI application, automation workflow, or AI consultation, 
          I&apos;m here to help transform your vision into reality.
        </p>
        
        {/* Quick Contact Options */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
          <Link 
            href={personalData.linkedIn} 
            target="_blank"
            className="flex items-center gap-2 bg-[#0077b5] hover:bg-[#005582] px-4 py-2 rounded-lg transition-colors duration-300"
          >
            <BiLogoLinkedin size={20} />
            <span>LinkedIn</span>
          </Link>
          <Link 
            href={personalData.github} 
            target="_blank"
            className="flex items-center gap-2 bg-[#333] hover:bg-[#24292e] px-4 py-2 rounded-lg transition-colors duration-300"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </Link>
          <Link 
            href={personalData.resume} 
            target="_blank"
            className="flex items-center gap-2 bg-[#16f2b3] hover:bg-[#13c99a] text-black px-4 py-2 rounded-lg transition-colors duration-300 font-medium"
          >
            <FaDownload size={16} />
            <span>Resume</span>
          </Link>
        </div>
      </div>

      {/* Enhanced Contact Form */}
      <div className="max-w-4xl text-white rounded-xl border border-[#464c6a] p-6 lg:p-8 bg-gradient-to-br from-[#0d1224] to-[#0a0e1a]">
        <div className="flex items-center gap-3 mb-6">
          <FaRocket className="text-[#16f2b3]" size={24} />
          <h3 className="text-xl font-semibold">Start Your Project</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-base font-medium">Your Name *</label>
              <input
                className="bg-[#10172d] w-full border rounded-lg border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-4 py-3"
                type="text"
                maxLength="100"
                required={true}
                placeholder="Enter your full name"
                onChange={(e) => setInput({ ...input, name: e.target.value })}
                onBlur={checkRequired}
                value={input.name}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base font-medium">Your Email *</label>
              <input
                className="bg-[#10172d] w-full border rounded-lg border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-4 py-3"
                type="email"
                maxLength="100"
                required={true}
                placeholder="your.email@company.com"
                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
                onBlur={() => {
                  checkRequired();
                  setError({ ...error, email: !isValidEmail(input.email) });
                }}
              />
              {error.email &&
                <p className="text-sm text-red-400">Please provide a valid email!</p>
              }
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base font-medium">Project Type</label>
              <select
                className="bg-[#10172d] w-full border rounded-lg border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-4 py-3"
                value={input.projectType}
                onChange={(e) => setInput({ ...input, projectType: e.target.value })}
              >
                <option value="">Select project type</option>
                <option value="AI Agent Development">AI Agent Development</option>
                <option value="Automation System">Automation System</option>
                <option value="Machine Learning Model">Machine Learning Model</option>
                <option value="Web Application">Web Application</option>
                <option value="AI Consultation">AI Consultation</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base font-medium">Budget Range</label>
              <select
                className="bg-[#10172d] w-full border rounded-lg border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-4 py-3"
                value={input.budget}
                onChange={(e) => setInput({ ...input, budget: e.target.value })}
              >
                <option value="">Select budget range</option>
                <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                <option value="$25,000+">$25,000+</option>
                <option value="Let&apos;s discuss">Let&apos;s discuss</option>
              </select>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-base font-medium">Timeline</label>
              <select
                className="bg-[#10172d] w-full border rounded-lg border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-4 py-3"
                value={input.timeline}
                onChange={(e) => setInput({ ...input, timeline: e.target.value })}
              >
                <option value="">Select timeline</option>
                <option value="ASAP (Rush job)">ASAP (Rush job)</option>
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="1-2 months">1-2 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6+ months">6+ months</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base font-medium">Project Details *</label>
              <textarea
                className="bg-[#10172d] w-full border rounded-lg border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-4 py-3"
                maxLength="1000"
                name="message"
                required={true}
                placeholder="Describe your project, goals, and specific requirements. The more details you provide, the better I can help you."
                onChange={(e) => setInput({ ...input, message: e.target.value })}
                onBlur={checkRequired}
                rows="8"
                value={input.message}
              />
              <p className="text-xs text-[#8b92a5]">
                {input.message.length}/1000 characters
              </p>
            </div>
          </div>
        </div>

        {/* Submit Section */}
        <div className="mt-8 text-center">
          {error.required &&
            <p className="text-sm text-red-400 mb-4">
              Name, Email and Project Details are required!
            </p>
          }
          <button
            className="flex items-center gap-3 mx-auto hover:gap-4 rounded-full bg-gradient-to-r from-[#16f2b3] to-[#13c99a] px-8 md:px-12 py-3 md:py-4 text-center text-sm md:text-base font-semibold uppercase tracking-wider text-black no-underline transition-all duration-300 ease-out hover:shadow-lg hover:shadow-[#16f2b3]/25 transform hover:scale-105"
            role="button"
            onClick={handleSendMail}
          >
            <span>Send Project Details</span>
            <TbMailForward size={20} />
          </button>
          <p className="text-xs text-[#8b92a5] mt-3">
            🔒 Your information is secure and will only be used to respond to your inquiry
          </p>
          <p className="text-sm text-[#16f2b3] mt-2 font-medium">
            ⚡ Typical response time: Within 24 hours
          </p>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="bg-[#10172d] border border-[#353a52] rounded-lg p-4">
          <h4 className="text-[#16f2b3] font-semibold mb-1">Fast Response</h4>
          <p className="text-sm text-[#d3d8e8]">24-hour response guarantee</p>
        </div>
        <div className="bg-[#10172d] border border-[#353a52] rounded-lg p-4">
          <h4 className="text-[#16f2b3] font-semibold mb-1">Free Consultation</h4>
          <p className="text-sm text-[#d3d8e8]">Initial project discussion</p>
        </div>
        <div className="bg-[#10172d] border border-[#353a52] rounded-lg p-4">
          <h4 className="text-[#16f2b3] font-semibold mb-1">Quality Guaranteed</h4>
          <p className="text-sm text-[#d3d8e8]">Professional AI solutions</p>
        </div>
      </div>
    </div>
  );
};

export default ContactWithCaptcha;