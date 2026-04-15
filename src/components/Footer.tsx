import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-blue-400">
              ToolScout
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Free and best tools for creators, freelancers, and small businesses.
              We review and compare the top tools to help you work smarter.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/category/invoicing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Invoicing
                </Link>
              </li>
              <li>
                <Link
                  href="/category/legal"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Legal
                </Link>
              </li>
              <li>
                <Link
                  href="/category/seo"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/category/productivity"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Productivity
                </Link>
              </li>
            </ul>
          </div>

          {/* Free Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Free Tools</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://invoicecraft-psi.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  InvoiceCraft
                </a>
              </li>
              <li>
                <a
                  href="https://policycraft-blond.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  PolicyCraft
                </a>
              </li>
              <li>
                <a
                  href="https://metatag-generator-flame.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  MetaTagGen
                </a>
              </li>
              <li>
                <a
                  href="https://robotstxt-generator-ten.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  RobotsTxtGen
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {currentYear} ToolScout. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/about"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              About
            </Link>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
