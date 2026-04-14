import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getPostsByCategory, getAllCategories } from "@/lib/blog";
import { CATEGORIES, Category } from "@/types/blog";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const category = resolvedParams.category as Category;
  const categoryInfo = CATEGORIES[category];

  if (!categoryInfo) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${categoryInfo.name} Tools & Guides`,
    description: categoryInfo.description,
    openGraph: {
      title: `${categoryInfo.name} Tools & Guides | ToolScout`,
      description: categoryInfo.description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const category = resolvedParams.category as Category;
  const categoryInfo = CATEGORIES[category];

  if (!categoryInfo) {
    notFound();
  }

  const posts = getPostsByCategory(category);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 capitalize">{categoryInfo.name}</li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {categoryInfo.name} Tools & Guides
        </h1>
        <p className="text-xl text-gray-600">{categoryInfo.description}</p>
      </header>

      {/* Posts */}
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">
            No articles in this category yet. Check back soon!
          </p>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Browse all articles
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {/* Other Categories */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Other Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(CATEGORIES)
            .filter(([slug]) => slug !== category)
            .map(([slug, info]) => (
              <Link
                key={slug}
                href={`/category/${slug}`}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-gray-900">{info.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{info.description}</p>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
