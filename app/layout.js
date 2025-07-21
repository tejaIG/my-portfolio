import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import { generateStructuredData } from "@/utils/seo-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://teja-telagathoti.vercel.app'),
  title: "Teja Telagathoti - AI Agents & Software Developer | Portfolio",
  description:
    "Teja Telagathoti is a results-oriented AI engineer specializing in autonomous systems, AI agents, and agentic AI. Expert in LangChain, CrewAI, n8n automation, and multi-agent systems. Available for hire.",
  keywords: "AI agents, agentic AI, software developer, LangChain, CrewAI, n8n automation, multi-agent systems, machine learning engineer, artificial intelligence, autonomous systems, AI automation, Python developer, AGI research",
  authors: [{ name: "Teja Telagathoti", url: "https://www.linkedin.com/in/teja-ig/" }],
  creator: "Teja Telagathoti",
  publisher: "Teja Telagathoti",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Teja Telagathoti Portfolio',
    title: 'Teja Telagathoti - AI Agents & Software Developer',
    description: 'Expert AI engineer specializing in autonomous systems, AI agents, and agentic AI. Available for hire to build intelligent automation solutions.',
    images: [
      {
        url: '/profile2.png',
        width: 1200,
        height: 630,
        alt: 'Teja Telagathoti - AI Agents & Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ig_teja',
    creator: '@ig_teja',
    title: 'Teja Telagathoti - AI Agents & Software Developer',
    description: 'Expert AI engineer specializing in autonomous systems, AI agents, and agentic AI. Available for hire.',
    images: ['/profile2.png'],
  },
  alternates: {
    canonical: '/',
  },
  category: 'technology',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f0f23" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/fevicon.ico" />
        <link rel="apple-touch-icon" href="/profile2.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateStructuredData()
          }}
        />
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
