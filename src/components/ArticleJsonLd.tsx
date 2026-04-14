import { BlogPost } from "@/types/blog";

interface ArticleJsonLdProps {
  post: BlogPost;
  url: string;
}

export default function ArticleJsonLd({ post, url }: ArticleJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    dateModified: post.date,
    publisher: {
      "@type": "Organization",
      name: "ToolScout",
      logo: {
        "@type": "ImageObject",
        url: `${url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}/blog/${post.slug}`,
    },
    image: post.image || `${url}/og-default.png`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
