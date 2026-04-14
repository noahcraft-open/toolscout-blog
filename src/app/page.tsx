import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { CATEGORIES } from "@/types/blog";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Free & Best Tools for Creators
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover the best free tools for freelancers and creators. We review
          and compare invoice generators, legal document tools, SEO utilities,
          and more.
        </p>
      </section>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(CATEGORIES).map(([slug, category]) => (
            <Link
              key={slug}
              href={`/category/${slug}`}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="font-semibold text-gray-900 mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
        </div>
        {posts.length === 0 ? (
          <p className="text-gray-500 text-center py-12">
            No articles yet. Check back soon!
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="mt-16 bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Looking for a Specific Tool?
        </h2>
        <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
          We have reviewed hundreds of free tools for creators. Browse our
          categories to find the perfect tool for your needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/category/invoicing"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Invoice Generators
          </Link>
          <Link
            href="/category/legal"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Legal Documents
          </Link>
          <Link
            href="/category/seo"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            SEO Tools
          </Link>
        </div>
      </section>
    </div>
  );
}
