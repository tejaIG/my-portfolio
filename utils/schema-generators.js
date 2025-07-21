// Schema generators for different content types

export function generateProjectSchema(project) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "name": project.name,
    "description": project.description,
    "author": {
      "@type": "Person",
      "name": "Teja Telagathoti",
      "url": "https://teja-telagathoti.vercel.app"
    },
    "programmingLanguage": project.tools,
    "applicationCategory": "Software Development",
    "operatingSystem": "Cross-platform",
    "url": project.demo || "https://teja-telagathoti.vercel.app",
    "codeRepository": project.code || "https://github.com/tejaIG",
    "keywords": project.tools.join(", "),
    "dateCreated": new Date().toISOString(),
    "creator": {
      "@type": "Person",
      "name": "Teja Telagathoti"
    }
  };
}

export function generateBlogSchema(blog) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.description,
    "image": blog.cover_image,
    "author": {
      "@type": "Person",
      "name": "Teja Telagathoti",
      "url": "https://www.linkedin.com/in/teja-ig/"
    },
    "publisher": {
      "@type": "Person",
      "name": "Teja Telagathoti",
      "url": "https://teja-telagathoti.vercel.app"
    },
    "datePublished": blog.published_at,
    "dateModified": blog.published_at,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://teja-telagathoti.vercel.app/blog/${blog.slug}`
    },
    "keywords": blog.tags ? blog.tags.join(", ") : "AI, Technology",
    "articleSection": "Technology",
    "wordCount": blog.reading_time_minutes * 200, // Approximate words
    "timeRequired": `PT${blog.reading_time_minutes}M`,
    "interactionStatistic": [
      {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/LikeAction",
        "userInteractionCount": blog.public_reactions_count || 0
      },
      {
        "@type": "InteractionCounter", 
        "interactionType": "https://schema.org/CommentAction",
        "userInteractionCount": blog.comments_count || 0
      }
    ]
  };
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Development Services",
    "description": "Professional AI development services including AI agents, automation systems, machine learning solutions, and AI consultation",
    "provider": {
      "@type": "Person",
      "name": "Teja Telagathoti",
      "url": "https://teja-telagathoti.vercel.app",
      "image": "https://teja-telagathoti.vercel.app/profile2.png"
    },
    "serviceType": [
      "AI Agent Development",
      "Automation System Development", 
      "Machine Learning Model Development",
      "AI Consultation",
      "Software Development"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "availableLanguage": ["English", "Hindi", "Telugu"],
    "serviceOutput": {
      "@type": "SoftwareApplication",
      "name": "Custom AI Solutions"
    },
    "category": "Technology Services",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceRange": "$1000-$25000+",
      "priceCurrency": "USD"
    }
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://teja-telagathoti.vercel.app/#person",
    "name": "Teja Telagathoti",
    "alternateName": "Teja IG",
    "description": "AI Engineer and Software Developer specializing in AI agents, agentic AI, and autonomous systems",
    "url": "https://teja-telagathoti.vercel.app",
    "image": "https://teja-telagathoti.vercel.app/profile2.png",
    "sameAs": [
      "https://github.com/tejaIG/",
      "https://www.linkedin.com/in/teja-ig/", 
      "https://twitter.com/ig_teja",
      "https://stackoverflow.com/users/21635745/teja-ig",
      "https://leetcode.com/u/teja_telagathoti/"
    ],
    "jobTitle": "AI Engineer & Software Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "MetaNovaAI"
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning", 
      "AI Agents",
      "Agentic AI",
      "LangChain",
      "CrewAI",
      "n8n Automation",
      "Multi-Agent Systems",
      "Python Programming",
      "Software Development",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "ROS (Robot Operating System)",
      "OpenCV",
      "Automation Systems"
    ],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "AI Development Services"
      }
    }
  };
}