// Advanced SEO optimization utilities

export const seoConfig = {
  baseUrl: 'https://teja-telagathoti.vercel.app',
  siteName: 'Teja Telagathoti Portfolio',
  titleTemplate: '%s | Teja Telagathoti',
  description: 'Expert AI engineer specializing in autonomous systems, AI agents, and agentic AI. Available for hire to build intelligent automation solutions.',
  keywords: [
    'AI agents',
    'agentic AI', 
    'software developer',
    'LangChain',
    'CrewAI', 
    'n8n automation',
    'multi-agent systems',
    'machine learning engineer',
    'artificial intelligence',
    'autonomous systems',
    'AI automation',
    'Python developer',
    'AGI research',
    'deep learning',
    'natural language processing',
    'computer vision',
    'ROS developer',
    'OpenCV',
    'automation engineer',
    'AI consultant',
    'freelance developer',
    'remote developer',
    'AI solutions',
    'intelligent systems',
    'hire AI developer',
    'AI project development'
  ],
  author: {
    name: 'Teja Telagathoti',
    url: 'https://www.linkedin.com/in/teja-ig/',
    email: 'telagathotiteja6522@gmail.com'
  },
  social: {
    twitter: '@ig_teja',
    linkedin: 'https://www.linkedin.com/in/teja-ig/',
    github: 'https://github.com/tejaIG/',
  }
};

export function generatePageMetadata(page) {
  const { title, description, keywords, path, image } = page;
  
  return {
    title: title ? `${title} | ${seoConfig.siteName}` : seoConfig.siteName,
    description: description || seoConfig.description,
    keywords: keywords ? [...seoConfig.keywords, ...keywords] : seoConfig.keywords,
    authors: [{ name: seoConfig.author.name, url: seoConfig.author.url }],
    creator: seoConfig.author.name,
    publisher: seoConfig.author.name,
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
      url: `${seoConfig.baseUrl}${path || ''}`,
      siteName: seoConfig.siteName,
      title: title || seoConfig.siteName,
      description: description || seoConfig.description,
      images: [
        {
          url: image || '/profile2.png',
          width: 1200,
          height: 630,
          alt: title || seoConfig.siteName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: seoConfig.social.twitter,
      creator: seoConfig.social.twitter,
      title: title || seoConfig.siteName,
      description: description || seoConfig.description,
      images: [image || '/profile2.png'],
    },
    alternates: {
      canonical: `${seoConfig.baseUrl}${path || ''}`,
    },
  };
}

export function generateBreadcrumbStructuredData(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${seoConfig.baseUrl}${crumb.path}`
    }))
  };
}

// Performance optimization utilities
export const performanceConfig = {
  imageFormats: ['image/webp', 'image/avif'],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  minimumCacheTTL: 31536000, // 1 year
};

export function getOptimizedImageProps(src, alt, width, height) {
  return {
    src,
    alt,
    width,
    height,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    priority: false,
    placeholder: 'blur',
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
  };
}