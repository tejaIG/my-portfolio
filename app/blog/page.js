// @flow strict

import { personalData } from "@/utils/data/personal-data";
import { getLocalBlogs } from "@/utils/data/blogs";
import BlogCard from "../components/homepage/blog/blog-card";

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