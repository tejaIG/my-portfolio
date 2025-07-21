// @flow strict
import { personalData } from "@/utils/data/personal-data";
import { getBlogBySlug } from "@/utils/data/blogs";
import { timeConverter } from "@/utils/time-converter";
import Image from "next/image";
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';
import { notFound } from 'next/navigation';
import { generateBlogSchema } from "@/utils/schema-generators";

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const blog = await getBlog(slug);
  
  if (!blog) {
    return {
      title: 'Blog Not Found - Teja Telagathoti',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${blog.title} | Teja Telagathoti Blog`,
    description: blog.description,
    keywords: blog.tags ? blog.tags.join(', ') : 'AI, Machine Learning, Technology, Programming',
    authors: [{ name: "Teja Telagathoti", url: "https://www.linkedin.com/in/teja-ig/" }],
    creator: "Teja Telagathoti",
    publisher: "Teja Telagathoti",
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `https://teja-telagathoti.vercel.app/blog/${slug}`,
      siteName: 'Teja Telagathoti Portfolio',
      title: blog.title,
      description: blog.description,
      images: [
        {
          url: blog.cover_image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      publishedTime: blog.published_at,
      authors: ['Teja Telagathoti'],
      tags: blog.tags,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ig_teja',
      creator: '@ig_teja',
      title: blog.title,
      description: blog.description,
      images: [blog.cover_image],
    },
    alternates: {
      canonical: `https://teja-telagathoti.vercel.app/blog/${slug}`,
    },
    other: {
      'article:author': 'Teja Telagathoti',
      'article:published_time': blog.published_at,
      'article:modified_time': blog.published_at,
      'article:section': 'Technology',
      'article:tag': blog.tags ? blog.tags.join(', ') : 'AI, Technology',
    },
  };
}

async function getBlog(slug) {
  // First check if it's a local blog
  const localBlog = getBlogBySlug(slug);
  if (localBlog) {
    return localBlog;
  }

  // Fallback to dev.to API for external blogs
  try {
    const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`);
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return null;
  }
}

async function BlogDetails({params}) {
  const slug = params.slug;
  const blog = await getBlog(slug);
  
  if (!blog) {
    notFound();
  }

  // Format content for local blogs (convert markdown-style content to HTML-like)
  const formatContent = (content) => {
    if (!content) return '';
    
    return content
      .split('\n')
      .map((line, index) => {
        // Handle headers
        if (line.startsWith('# ')) {
          return `<h1 key="${index}" className="text-3xl font-bold text-white mb-6 mt-8">${line.substring(2)}</h1>`;
        }
        if (line.startsWith('## ')) {
          return `<h2 key="${index}" className="text-2xl font-semibold text-white mb-4 mt-6">${line.substring(3)}</h2>`;
        }
        if (line.startsWith('### ')) {
          return `<h3 key="${index}" className="text-xl font-semibold text-white mb-3 mt-5">${line.substring(4)}</h3>`;
        }
        if (line.startsWith('#### ')) {
          return `<h4 key="${index}" className="text-lg font-semibold text-white mb-2 mt-4">${line.substring(5)}</h4>`;
        }
        
        // Handle paragraphs
        if (line.trim() && !line.startsWith('|') && !line.startsWith('-') && !line.startsWith('*')) {
          const formattedLine = line
            .replace(/\*\*(.*?)\*\*/g, '<strong className="text-[#16f2b3]">$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`(.*?)`/g, '<code className="bg-[#1d293a] px-2 py-1 rounded text-[#16f2b3]">$1</code>');
          return `<p key="${index}" className="text-[#d3d8e8] mb-4 leading-relaxed">${formattedLine}</p>`;
        }
        
        return '';
      })
      .join('');
  };

  return (
    <div className="py-8">
      {/* Blog Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBlogSchema(blog))
        }}
      />
      
      {/* Hero Section */}
      <div className="mb-8">
        <div className="h-64 lg:h-80 w-full overflow-hidden rounded-lg mb-6">
          <Image
            src={blog.cover_image}
            height={1080}
            width={1920}
            alt={blog.title}
            className='h-full w-full object-cover'
          />
        </div>
        
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          {blog.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-[#16f2b3] text-sm mb-4">
          <p>{timeConverter(blog.published_at)}</p>
          <p>{`${blog.reading_time_minutes} Min Read`}</p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{blog.public_reactions_count}</span>
            </p>
            {blog.comments_count > 0 &&
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{blog.comments_count}</span>
              </p>
            }
          </div>
        </div>
        
        <p className="text-lg text-[#d3d8e8] leading-relaxed">
          {blog.description}
        </p>
      </div>

      {/* Content Section */}
      <div className="prose prose-lg max-w-none">
        {blog.content ? (
          <BlogContent content={blog.content} />
        ) : blog.body_html ? (
          <div 
            className="text-[#d3d8e8] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.body_html }}
          />
        ) : (
          <p className="text-[#d3d8e8]">Content not available.</p>
        )}
      </div>

      {/* Tags */}
      {blog.tags && blog.tags.length > 0 && (
        <div className="mt-8 pt-6 border-t border-[#1d293a]">
          <h3 className="text-lg font-semibold text-white mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-[#1d293a] text-[#16f2b3] px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Component to render blog content with proper formatting
function BlogContent({ content }) {
  const renderContent = () => {
    const lines = content.split('\n');
    const elements = [];
    let currentListItems = [];
    let isInList = false;
    let tableRows = [];
    let isInTable = false;

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Handle tables
      if (trimmedLine.startsWith('|') && trimmedLine.endsWith('|')) {
        if (!isInTable) {
          isInTable = true;
          tableRows = [];
        }
        tableRows.push(trimmedLine);
        return;
      } else if (isInTable) {
        // End of table
        elements.push(
          <div key={`table-${index}`} className="overflow-x-auto my-6">
            <table className="min-w-full border border-[#1d293a]">
              <tbody>
                {tableRows.map((row, rowIndex) => {
                  const cells = row.split('|').filter(cell => cell.trim() !== '');
                  const isHeader = rowIndex === 0;
                  return (
                    <tr key={rowIndex} className={isHeader ? "bg-[#1d293a]" : ""}>
                      {cells.map((cell, cellIndex) => {
                        const Element = isHeader ? 'th' : 'td';
                        return (
                          <Element 
                            key={cellIndex} 
                            className="border border-[#1d293a] px-4 py-2 text-[#d3d8e8]"
                          >
                            {cell.trim()}
                          </Element>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
        isInTable = false;
        tableRows = [];
      }

      // Handle lists
      if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
        if (!isInList) {
          isInList = true;
        }
        currentListItems.push(
          <li key={`${index}-li`} className="text-[#d3d8e8] mb-1">
            {formatInlineElements(trimmedLine.substring(2))}
          </li>
        );
        return;
      } else if (isInList) {
        // End of list
        elements.push(
          <ul key={`list-${index}`} className="list-disc list-inside my-4 space-y-1">
            {currentListItems}
          </ul>
        );
        isInList = false;
        currentListItems = [];
      }

      // Handle headers
      if (trimmedLine.startsWith('# ')) {
        elements.push(
          <h1 key={index} className="text-3xl font-bold text-white mb-6 mt-8">
            {trimmedLine.substring(2)}
          </h1>
        );
      } else if (trimmedLine.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="text-2xl font-semibold text-white mb-4 mt-6">
            {trimmedLine.substring(3)}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-xl font-semibold text-white mb-3 mt-5">
            {trimmedLine.substring(4)}
          </h3>
        );
      } else if (trimmedLine.startsWith('#### ')) {
        elements.push(
          <h4 key={index} className="text-lg font-semibold text-white mb-2 mt-4">
            {trimmedLine.substring(5)}
          </h4>
        );
      } else if (trimmedLine.startsWith('---')) {
        elements.push(
          <hr key={index} className="border-[#1d293a] my-6" />
        );
      } else if (trimmedLine && !trimmedLine.startsWith('|')) {
        // Regular paragraphs
        elements.push(
          <p key={index} className="text-[#d3d8e8] mb-4 leading-relaxed">
            {formatInlineElements(trimmedLine)}
          </p>
        );
      }
    });

    // Handle any remaining list at the end
    if (isInList && currentListItems.length > 0) {
      elements.push(
        <ul key="final-list" className="list-disc list-inside my-4 space-y-1">
          {currentListItems}
        </ul>
      );
    }

    return elements;
  };

  // Helper function to format inline elements like bold, italic, code
  const formatInlineElements = (text) => {
    const parts = [];
    let currentText = text;
    let key = 0;

    // Handle bold text
    currentText = currentText.replace(/\*\*(.*?)\*\*/g, (match, content) => {
      const placeholder = `__BOLD_${key}__`;
      parts.push({
        type: 'bold',
        content,
        placeholder,
        key: key++
      });
      return placeholder;
    });

    // Handle italic text
    currentText = currentText.replace(/\*(.*?)\*/g, (match, content) => {
      const placeholder = `__ITALIC_${key}__`;
      parts.push({
        type: 'italic',
        content,
        placeholder,
        key: key++
      });
      return placeholder;
    });

    // Handle code
    currentText = currentText.replace(/`(.*?)`/g, (match, content) => {
      const placeholder = `__CODE_${key}__`;
      parts.push({
        type: 'code',
        content,
        placeholder,
        key: key++
      });
      return placeholder;
    });

    // Split text and reconstruct with React elements
    let result = [currentText];
    
    parts.forEach(part => {
      result = result.flatMap(item => {
        if (typeof item === 'string' && item.includes(part.placeholder)) {
          const splitParts = item.split(part.placeholder);
          const element = part.type === 'bold' ? 
            <strong key={part.key} className="text-[#16f2b3] font-semibold">{part.content}</strong> :
            part.type === 'italic' ?
            <em key={part.key} className="text-[#16f2b3]">{part.content}</em> :
            <code key={part.key} className="bg-[#1d293a] px-2 py-1 rounded text-[#16f2b3] text-sm">{part.content}</code>;
          
          return [
            splitParts[0],
            element,
            ...splitParts.slice(1)
          ].filter(item => item !== '');
        }
        return item;
      });
    });

    return result;
  };

  return <div>{renderContent()}</div>;
}

export default BlogDetails;