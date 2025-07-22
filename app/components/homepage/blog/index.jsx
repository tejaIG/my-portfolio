// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';

function Blog({ blogs }) {

  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
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
            Blogs
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogs.slice(0, 6).map((blog, i) => (
            blog?.cover_image &&
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>

      <div className="flex justify-center  mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href="/blog"
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
      
      {/* AI Industry Publications Section */}
      <div className="mt-12 pt-8 border-t border-[#25213b]">
        <div className="text-center mb-6">
          <h3 className="text-lg text-white mb-3">Recommended AI Reading</h3>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Explore leading AI publications and thought leadership content
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <a 
            href="https://towardsdatascience.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg border border-[#1f223c] bg-[#11152c] hover:border-violet-500 transition-all duration-300"
          >
            <span className="text-[#16f2b3] text-sm font-medium mb-1">Towards Data Science</span>
            <span className="text-gray-400 text-xs text-center">ML & AI Articles</span>
          </a>
          
          <a 
            href="https://openai.com/blog/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg border border-[#1f223c] bg-[#11152c] hover:border-violet-500 transition-all duration-300"
          >
            <span className="text-[#16f2b3] text-sm font-medium mb-1">OpenAI Blog</span>
            <span className="text-gray-400 text-xs text-center">AI Research Updates</span>
          </a>
          
          <a 
            href="https://distill.pub/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg border border-[#1f223c] bg-[#11152c] hover:border-violet-500 transition-all duration-300"
          >
            <span className="text-[#16f2b3] text-sm font-medium mb-1">Distill</span>
            <span className="text-gray-400 text-xs text-center">ML Explanations</span>
          </a>
          
          <a 
            href="https://ai.googleblog.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg border border-[#1f223c] bg-[#11152c] hover:border-violet-500 transition-all duration-300"
          >
            <span className="text-[#16f2b3] text-sm font-medium mb-1">Google AI Blog</span>
            <span className="text-gray-400 text-xs text-center">AI Innovations</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;