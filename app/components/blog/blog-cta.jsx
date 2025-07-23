// @flow strict
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { HiOutlineMail, HiOutlineChat } from 'react-icons/hi';

function BlogCTA({ blogTitle, relatedServices = [] }) {
  return (
    <div className="bg-gradient-to-r from-[#1d293a] to-[#0d1224] rounded-lg p-6 mt-8 border border-[#464c6a]">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-3">
          Ready to Implement These AI Solutions?
        </h3>
        <p className="text-[#d3d8e8] text-lg leading-relaxed">
          Transform your business with cutting-edge AI technologies. Let&apos;s discuss how these concepts can be applied to your specific use case.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <Link href="/contact" className="group">
          <div className="bg-[#16f2b3] hover:bg-[#0fd9a6] transition-colors duration-300 rounded-lg p-4 text-center">
            <HiOutlineMail className="text-2xl text-[#0d1224] mx-auto mb-2" />
            <h4 className="text-[#0d1224] font-semibold mb-1">Get Free Consultation</h4>
            <p className="text-[#0d1224] text-sm">Discuss your AI project requirements</p>
          </div>
        </Link>

        <a href="mailto:telagathotiteja6522@gmail.com" className="group">
          <div className="border-2 border-[#16f2b3] hover:bg-[#16f2b3] hover:text-[#0d1224] transition-all duration-300 rounded-lg p-4 text-center">
            <HiOutlineChat className="text-2xl text-[#16f2b3] group-hover:text-[#0d1224] mx-auto mb-2" />
            <h4 className="text-[#16f2b3] group-hover:text-[#0d1224] font-semibold mb-1">Direct Email</h4>
            <p className="text-[#16f2b3] group-hover:text-[#0d1224] text-sm">telagathotiteja6522@gmail.com</p>
          </div>
        </a>
      </div>

      {relatedServices.length > 0 && (
        <div className="border-t border-[#464c6a] pt-4">
          <h4 className="text-lg font-semibold text-white mb-3">Related Services & Projects:</h4>
          <div className="flex flex-wrap gap-2">
            {relatedServices.map((service, index) => (
              <Link key={index} href={service.link} className="group">
                <span className="inline-flex items-center gap-1 bg-[#0d1224] text-[#16f2b3] px-3 py-1 rounded-full text-sm border border-[#16f2b3] hover:bg-[#16f2b3] hover:text-[#0d1224] transition-all duration-300">
                  {service.name}
                  <BsArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="text-center mt-4">
        <p className="text-[#d3d8e8] text-sm">
          <strong>Expertise:</strong> AI Agents, Agentic AI, Machine Learning, Multi-Agent Systems, Autonomous AI Development
        </p>
      </div>
    </div>
  );
}

export default BlogCTA;