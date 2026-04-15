import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ToolScout - Free & Best Tools for Creators",
    template: "%s | ToolScout",
  },
  description:
    "Discover the best free tools for freelancers and creators. Reviews, comparisons, and guides for invoicing, legal documents, SEO tools, and productivity apps.",
  keywords: [
    "free tools",
    "freelancer tools",
    "creator tools",
    "invoice generator",
    "privacy policy generator",
    "SEO tools",
    "productivity tools",
  ],
  authors: [{ name: "ToolScout Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://toolscout-blog.vercel.app",
    siteName: "ToolScout",
    title: "ToolScout - Free & Best Tools for Creators",
    description:
      "Discover the best free tools for freelancers and creators. Reviews, comparisons, and guides.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolScout - Free & Best Tools for Creators",
    description:
      "Discover the best free tools for freelancers and creators. Reviews, comparisons, and guides.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "bLrgi5ATeT4JPaaOD2GpJcB_Z8oeSJJ68KWczPUx1B4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="google-site-verification" content="bLrgi5ATeT4JPaaOD2GpJcB_Z8oeSJJ68KWczPUx1B4" />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
