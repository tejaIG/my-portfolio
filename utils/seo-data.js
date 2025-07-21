// @flow strict

export function generateStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://teja-telagathoti.vercel.app/#person",
        "name": "Teja Telagathoti",
        "givenName": "Teja",
        "familyName": "Telagathoti",
        "jobTitle": "AI Engineer & Software Developer",
        "description": "Expert in AI agents, agentic AI, autonomous systems, LangChain, CrewAI, and multi-agent systems",
        "url": "https://teja-telagathoti.vercel.app",
        "image": {
          "@type": "ImageObject",
          "url": "https://teja-telagathoti.vercel.app/profile2.png",
          "width": 400,
          "height": 400
        },
        "email": "telagathotiteja6522@gmail.com",
        "telephone": "+917337228636",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chilakaluripeta",
          "addressRegion": "AP",
          "addressCountry": "India"
        },
        "sameAs": [
          "https://github.com/tejaIG/",
          "https://www.linkedin.com/in/teja-ig/",
          "https://twitter.com/ig_teja",
          "https://stackoverflow.com/users/21635745/teja-ig",
          "https://leetcode.com/u/teja_telagathoti/"
        ],
        "knowsAbout": [
          "AI Agents",
          "Agentic AI",
          "LangChain",
          "CrewAI",
          "n8n",
          "AutoGPT",
          "Multi-Agent Systems",
          "Machine Learning",
          "Python",
          "ROS",
          "OpenCV",
          "Artificial Intelligence",
          "Deep Learning",
          "Natural Language Processing",
          "Computer Vision",
          "Automation",
          "Software Development"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "MetaNovaAI",
          "url": "https://metanovaai.com"
        },
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "KKR & KSR Institute of Technology and Sciences",
            "url": "https://kitsw.ac.in"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://teja-telagathoti.vercel.app/#website",
        "url": "https://teja-telagathoti.vercel.app",
        "name": "Teja Telagathoti Portfolio",
        "description": "Portfolio website of Teja Telagathoti - AI Engineer specializing in AI agents, agentic AI, and autonomous systems",
        "publisher": {
          "@id": "https://teja-telagathoti.vercel.app/#person"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://teja-telagathoti.vercel.app/blog?search={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://teja-telagathoti.vercel.app/#webpage",
        "url": "https://teja-telagathoti.vercel.app",
        "name": "Teja Telagathoti - AI Agents & Software Developer",
        "description": "Expert AI engineer specializing in autonomous systems, AI agents, and agentic AI. Available for hire to build intelligent automation solutions.",
        "isPartOf": {
          "@id": "https://teja-telagathoti.vercel.app/#website"
        },
        "about": {
          "@id": "https://teja-telagathoti.vercel.app/#person"
        },
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString(),
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://teja-telagathoti.vercel.app"
            }
          ]
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://teja-telagathoti.vercel.app/#service",
        "name": "AI Development Services",
        "description": "Professional AI development services including AI agents, automation systems, and machine learning solutions",
        "provider": {
          "@id": "https://teja-telagathoti.vercel.app/#person"
        },
        "serviceType": [
          "AI Agent Development",
          "Automation System Development",
          "Machine Learning Model Development",
          "AI Consultation",
          "Software Development"
        ],
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Hindi", "Telugu"]
      }
    ]
  };
  
  return JSON.stringify(structuredData);
}