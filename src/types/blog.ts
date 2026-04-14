export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  image?: string;
  readingTime: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  image?: string;
  readingTime: string;
}

export type Category = "invoicing" | "legal" | "seo" | "productivity";

export const CATEGORIES: Record<Category, { name: string; description: string }> = {
  invoicing: {
    name: "Invoicing",
    description: "Free invoicing tools and guides for freelancers",
  },
  legal: {
    name: "Legal",
    description: "Privacy policies, terms of service, and legal document generators",
  },
  seo: {
    name: "SEO",
    description: "Search engine optimization tools and guides",
  },
  productivity: {
    name: "Productivity",
    description: "Tools and tips to boost your freelance productivity",
  },
};
