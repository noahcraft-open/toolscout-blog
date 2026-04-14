import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Sorry, we could not find the page you are looking for. It might have
        been moved or deleted.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/about"
          className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
        >
          About Us
        </Link>
      </div>
    </div>
  );
}
