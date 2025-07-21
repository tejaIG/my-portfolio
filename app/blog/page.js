// @flow strict

import { personalData } from "@/utils/data/personal-data";
import { getLocalBlogs } from "@/utils/data/blogs";
import BlogCard from "../components/homepage/blog/blog-card";

export const metadata = {
  title: "Blog - Teja Telagathoti | AI, Technology & Innovation Insights",
  description: "Explore in-depth articles on AI agents, agentic AI, machine learning, and technology innovations by Teja Telagathoti. Stay updated with the latest trends in artificial intelligence and software development.",
  keywords: "AI blog, machine learning articles, agentic AI, technology insights, artificial intelligence, software development, innovation, AI trends, tech articles",
  authors: [{ name: "Teja Telagathoti", url: "https://www.linkedin.com/in/teja-ig/" }],
  creator: "Teja Telagathoti",
  publisher: "Teja Telagathoti",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://teja-telagathoti.vercel.app/blog',
    siteName: 'Teja Telagathoti Portfolio',
    title: 'Technology Blog - AI, Machine Learning & Innovation',
    description: 'Discover expert insights on AI agents, machine learning, and cutting-edge technology innovations. Written by AI engineer Teja Telagathoti.',
    images: [
      {
        url: '/profile2.png',
        width: 1200,
        height: 630,
        alt: 'Teja Telagathoti Technology Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ig_teja',
    creator: '@ig_teja',
    title: 'Technology Blog - AI, Machine Learning & Innovation',
    description: 'Expert insights on AI agents, machine learning, and technology innovations.',
    images: ['/profile2.png'],
  },
  alternates: {
    canonical: 'https://teja-telagathoti.vercel.app/blog',
  },
};

async function getBlogs() {
  try {
    // Try to fetch from dev.to first
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)
    if (res.ok) {
      const devBlogs = await res.json();
      // Combine local blogs with dev.to blogs
      const localBlogs = getLocalBlogs();
      return [...localBlogs, ...devBlogs];
    }
  } catch (error) {
    console.log('Dev.to API not available, using local blogs only');
  }
  
  // Fallback to local blogs only
  return getLocalBlogs();
};

async function page() {
  const blogs = await getBlogs();

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blog
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogs.map((blog, i) => (
            blog?.cover_image &&
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>
    </div>
  );
};

export default page;