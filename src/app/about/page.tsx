import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ToolScout",
  description:
    "Learn about ToolScout and our mission to help freelancers and creators find the best free tools.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900">About</li>
        </ol>
      </nav>

      {/* Content */}
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          About ToolScout
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          ToolScout is your go-to resource for discovering the best free tools
          for freelancers, creators, and small businesses.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 mb-4">
          We believe that great tools should be accessible to everyone,
          regardless of budget. That is why we spend countless hours testing,
          reviewing, and comparing free tools so you do not have to.
        </p>
        <p className="text-gray-700 mb-4">
          Whether you are a freelancer looking for an invoice generator, a
          blogger needing SEO tools, or a small business owner searching for
          legal document templates, we have got you covered.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          What We Cover
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Invoicing Tools:</strong> Free invoice generators and
            billing software
          </li>
          <li>
            <strong>Legal Documents:</strong> Privacy policy generators, terms
            of service templates, and more
          </li>
          <li>
            <strong>SEO Tools:</strong> Meta tag generators, robots.txt
            creators, and optimization guides
          </li>
          <li>
            <strong>Productivity:</strong> Tools to help you work smarter and
            faster
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Our Review Process
        </h2>
        <p className="text-gray-700 mb-4">
          Every tool we recommend goes through a thorough review process:
        </p>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>We test the tool ourselves with real-world use cases</li>
          <li>We evaluate features, usability, and limitations</li>
          <li>We compare it against similar tools in the market</li>
          <li>We provide honest pros and cons</li>
          <li>We update our reviews as tools evolve</li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Affiliate Disclosure
        </h2>
        <p className="text-gray-700 mb-4">
          Some of the links on ToolScout are affiliate links. This means we may
          earn a small commission if you sign up for a paid plan through our
          links. However, this never influences our reviews or recommendations.
          We only recommend tools we genuinely believe are valuable.
        </p>
        <p className="text-gray-700 mb-4">
          The commission we earn helps us keep ToolScout running and allows us
          to continue providing free, unbiased reviews.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-700 mb-4">
          Have a tool you would like us to review? Found an error in one of our
          articles? We would love to hear from you!
        </p>
        <p className="text-gray-700">
          Email us at:{" "}
          <a
            href="mailto:hello@toolscout.example.com"
            className="text-blue-600 hover:text-blue-800"
          >
            hello@toolscout.example.com
          </a>
        </p>
      </article>

      {/* CTA */}
      <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to explore?
        </h3>
        <p className="text-gray-600 mb-6">
          Check out our latest reviews and find the perfect tools for your
          business.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Browse All Articles
        </Link>
      </div>
    </div>
  );
}
