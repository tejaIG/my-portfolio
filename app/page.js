import { personalData } from "@/utils/data/personal-data";
import { getLocalBlogs } from "@/utils/data/blogs";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

async function getData() {
  // Return only the 3 new AI startup blogs for homepage display
  const localBlogs = getLocalBlogs();
  // Filter to get only the 3 new AI startup blogs (IDs 4, 5, 6)
  const newAIStartupBlogs = localBlogs.filter(blog => [4, 5, 6].includes(blog.id));
  return newAIStartupBlogs;
};

export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
      <Analytics />
      <SpeedInsights />
    </>
  )
};