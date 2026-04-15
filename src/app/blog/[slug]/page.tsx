import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import TableOfContents from "@/components/TableOfContents";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import MDXComponents from "@/components/MDXComponents";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <ArticleJsonLd post={post} url="https://toolscout-blog.vercel.app" />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href={`/category/${post.category}`}
                className="hover:text-blue-600 capitalize"
              >
                {post.category}
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 truncate max-w-xs">{post.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Link
              href={`/category/${post.category}`}
              className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full capitalize hover:bg-blue-200 transition-colors"
            >
              {post.category}
            </Link>
            <span className="text-gray-500 text-sm">{post.readingTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 mb-4">{post.description}</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>By {post.author}</span>
            <span className="mx-2">|</span>
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
        </header>

        {/* Table of Contents */}
        <TableOfContents />

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <MDXRemote
            source={post.content}
            components={MDXComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
              },
            }}
          />
        </div>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">
            About {post.author}
          </h3>
          <p className="text-gray-600">
            The ToolScout team reviews and compares the best free tools for
            freelancers and creators. Our mission is to help you find the
            perfect tools to grow your business without breaking the bank.
          </p>
        </div>

        {/* Related Posts CTA */}
        <div className="mt-8 text-center">
          <Link
            href={`/category/${post.category}`}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            More {post.category} Articles
          </Link>
        </div>
      </article>
    </>
  );
}
