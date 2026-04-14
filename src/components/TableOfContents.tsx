"use client";

import { useEffect, useState, useMemo, useRef } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const hasExtractedHeadings = useRef(false);

  // Extract headings on mount - this is intentional synchronization with DOM
  useEffect(() => {
    if (hasExtractedHeadings.current) return;

    const article = document.querySelector("article");
    if (!article) return;

    const elements = article.querySelectorAll("h2, h3");
    const items: TocItem[] = Array.from(elements).map((elem) => ({
      id: elem.id,
      text: elem.textContent || "",
      level: elem.tagName === "H2" ? 2 : 3,
    }));

    if (items.length > 0) {
      hasExtractedHeadings.current = true;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHeadings(items);
    }
  }, []);

  // Set up intersection observer separately
  useEffect(() => {
    if (headings.length === 0) return;

    const article = document.querySelector("article");
    if (!article) return;

    const elements = article.querySelectorAll("h2, h3");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    elements.forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, [headings]);

  const tocContent = useMemo(() => {
    if (headings.length === 0) return null;

    return (
      <nav className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h2>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={heading.level === 3 ? "ml-4" : ""}
            >
              <a
                href={`#${heading.id}`}
                className={`block text-sm transition-colors ${
                  activeId === heading.id
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }, [headings, activeId]);

  return tocContent;
}
