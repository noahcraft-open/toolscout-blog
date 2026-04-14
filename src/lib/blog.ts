import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { BlogPost, BlogPostMeta } from "@/types/blog";

const contentDirectory = path.join(process.cwd(), "src/content/blog");

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory);
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(contentDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || "",
        description: data.description || "",
        date: data.date || "",
        category: data.category || "",
        author: data.author || "ToolScout Team",
        image: data.image,
        readingTime: stats.text,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    category: data.category || "",
    author: data.author || "ToolScout Team",
    image: data.image,
    readingTime: stats.text,
    content,
  };
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category === category);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories);
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
