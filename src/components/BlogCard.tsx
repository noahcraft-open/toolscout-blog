import Link from "next/link";
import { BlogPostMeta } from "@/types/blog";

interface BlogCardProps {
  post: BlogPostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/blog/${post.slug}`}>
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-3">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full capitalize">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{post.readingTime}</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{post.author}</span>
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
        </div>
      </Link>
    </article>
  );
}
