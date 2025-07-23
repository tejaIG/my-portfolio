// @flow strict

// Map blog topics to related services and projects
export const getRelatedServices = (blogSlug) => {
  const serviceMap = {
    "agentic-ai-everyday-workflows-automation-2025": [
      { name: "Intelligent Multi-Agent Systems", link: "/#projects" },
      { name: "AI Automation Consulting", link: "/contact" },
      { name: "n8n Workflow Development", link: "/contact" }
    ],
    "custom-ai-silicon-beyond-gpus-chips-future-2025": [
      { name: "AI Hardware Optimization", link: "/contact" },
      { name: "Custom AI Solutions", link: "/#projects" },
      { name: "Performance Analysis", link: "/contact" }
    ],
    "responsible-ai-playbooks-regulations-compliance-2025": [
      { name: "AI Ethics Consulting", link: "/contact" },
      { name: "Compliance Auditing", link: "/contact" },
      { name: "Responsible AI Development", link: "/#projects" }
    ],
    "agentic-ai-trends-india-2024": [
      { name: "Agentic AI Chatbot Development", link: "/#projects" },
      { name: "AI Agent Implementation", link: "/contact" },
      { name: "Multi-Agent Systems", link: "/#projects" }
    ],
    "agi-scope-artificial-general-intelligence": [
      { name: "Advanced AI Research", link: "/contact" },
      { name: "AI Strategy Consulting", link: "/contact" },
      { name: "Intelligent Systems Design", link: "/#projects" }
    ],
    "ai-agents-vs-humans-collaboration-future": [
      { name: "Human-AI Collaboration", link: "/contact" },
      { name: "AI Agent Development", link: "/#projects" },
      { name: "Autonomous Systems", link: "/contact" }
    ],
    "india-ai-startup-revolution-funding-growth-2025": [
      { name: "AI Startup Consulting", link: "/contact" },
      { name: "Market Analysis", link: "/contact" },
      { name: "Technology Strategy", link: "/#projects" }
    ],
    "top-indian-ai-startups-innovation-leaders-2025": [
      { name: "Innovation Strategy", link: "/contact" },
      { name: "Competitive Analysis", link: "/contact" },
      { name: "AI Solutions Development", link: "/#projects" }
    ],
    "building-ai-startups-india-ecosystem-challenges-opportunities-2025": [
      { name: "Startup Mentoring", link: "/contact" },
      { name: "Technical Advisory", link: "/contact" },
      { name: "Product Development", link: "/#projects" }
    ]
  };

  return serviceMap[blogSlug] || [
    { name: "AI Consulting", link: "/contact" },
    { name: "Custom AI Solutions", link: "/#projects" },
    { name: "Technical Advisory", link: "/contact" }
  ];
};

// Get service categories based on blog content
export const getServiceCategory = (blogSlug) => {
  const categoryMap = {
    "agentic-ai-everyday-workflows-automation-2025": "AI Automation & Agents",
    "custom-ai-silicon-beyond-gpus-chips-future-2025": "AI Hardware & Performance",
    "responsible-ai-playbooks-regulations-compliance-2025": "AI Ethics & Compliance",
    "agentic-ai-trends-india-2024": "AI Strategy & Implementation",
    "agi-scope-artificial-general-intelligence": "Advanced AI Research",
    "ai-agents-vs-humans-collaboration-future": "Human-AI Collaboration",
    "india-ai-startup-revolution-funding-growth-2025": "AI Market & Strategy",
    "top-indian-ai-startups-innovation-leaders-2025": "Innovation & Leadership",
    "building-ai-startups-india-ecosystem-challenges-opportunities-2025": "Entrepreneurship & Growth"
  };

  return categoryMap[blogSlug] || "AI Consulting";
};

// Cross-reference blogs based on topics
export const getRelatedBlogs = (currentBlogSlug, allBlogs) => {
  const topicMap = {
    "agentic-ai-everyday-workflows-automation-2025": ["agentic-ai-trends-india-2024", "ai-agents-vs-humans-collaboration-future"],
    "custom-ai-silicon-beyond-gpus-chips-future-2025": ["india-ai-startup-revolution-funding-growth-2025", "top-indian-ai-startups-innovation-leaders-2025"],
    "responsible-ai-playbooks-regulations-compliance-2025": ["building-ai-startups-india-ecosystem-challenges-opportunities-2025", "agi-scope-artificial-general-intelligence"],
    "agentic-ai-trends-india-2024": ["agentic-ai-everyday-workflows-automation-2025", "ai-agents-vs-humans-collaboration-future"],
    "agi-scope-artificial-general-intelligence": ["ai-agents-vs-humans-collaboration-future", "responsible-ai-playbooks-regulations-compliance-2025"],
    "ai-agents-vs-humans-collaboration-future": ["agentic-ai-trends-india-2024", "agentic-ai-everyday-workflows-automation-2025"],
    "india-ai-startup-revolution-funding-growth-2025": ["top-indian-ai-startups-innovation-leaders-2025", "building-ai-startups-india-ecosystem-challenges-opportunities-2025"],
    "top-indian-ai-startups-innovation-leaders-2025": ["india-ai-startup-revolution-funding-growth-2025", "building-ai-startups-india-ecosystem-challenges-opportunities-2025"],
    "building-ai-startups-india-ecosystem-challenges-opportunities-2025": ["india-ai-startup-revolution-funding-growth-2025", "top-indian-ai-startups-innovation-leaders-2025"]
  };

  const relatedSlugs = topicMap[currentBlogSlug] || [];
  return allBlogs.filter(blog => relatedSlugs.includes(blog.slug)).slice(0, 3);
};