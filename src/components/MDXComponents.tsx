import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  [key: string]: unknown;
}

const MDXComponents = {
  h1: ({ children, ...props }: Props) => (
    <h1
      className="text-4xl font-bold text-gray-900 mt-8 mb-4"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: Props) => (
    <h2
      className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: Props) => (
    <h3
      className="text-xl font-semibold text-gray-900 mt-6 mb-3 scroll-mt-20"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: Props) => (
    <h4
      className="text-lg font-semibold text-gray-900 mt-4 mb-2"
      {...props}
    >
      {children}
    </h4>
  ),
  p: ({ children, ...props }: Props) => (
    <p className="text-gray-700 leading-relaxed mb-4" {...props}>
      {children}
    </p>
  ),
  a: ({ children, href, ...props }: Props & { href?: string }) => (
    <a
      href={href}
      className="text-blue-600 hover:text-blue-800 underline"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  ),
  ul: ({ children, ...props }: Props) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: Props) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: Props) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: Props) => (
    <blockquote
      className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-600"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }: Props) => (
    <code
      className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...props }: Props) => (
    <pre
      className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4"
      {...props}
    >
      {children}
    </pre>
  ),
  table: ({ children, ...props }: Props) => (
    <div className="overflow-x-auto mb-6">
      <table
        className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg"
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: Props) => (
    <thead className="bg-gray-50" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: Props) => (
    <tbody className="divide-y divide-gray-200" {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }: Props) => (
    <tr {...props}>{children}</tr>
  ),
  th: ({ children, ...props }: Props) => (
    <th
      className="px-4 py-3 text-left text-sm font-semibold text-gray-900"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: Props) => (
    <td className="px-4 py-3 text-sm text-gray-700" {...props}>
      {children}
    </td>
  ),
  hr: (props: Props) => <hr className="my-8 border-gray-200" {...props} />,
  strong: ({ children, ...props }: Props) => (
    <strong className="font-semibold text-gray-900" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: Props) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),
};

export default MDXComponents;
