// components/CodeBlock.tsx

"use client";

import React, { useEffect, useRef } from "react";
import Prism from "prismjs"; // Import Prism.js for syntax highlighting
import "prismjs/themes/prism-okaidia.min.css"; // Import the default Prism CSS theme

// Import specific language components needed for syntax highlighting
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
// You can import additional language components here as needed

/**
 * Props interface for the CodeBlock component.
 *
 * @property {string} code - The code snippet to be highlighted.
 * @property {string} language - The programming language of the code.
 */
interface CodeBlockProps {
  code: string;
  language: string;
}

/**
 * CodeBlock component for rendering syntax-highlighted code snippets.
 *
 * This component uses Prism.js to highlight code syntax based on the specified
 * programming language. It supports various programming languages through
 * language-specific imports of Prism components.
 *
 * @param {CodeBlockProps} props - The properties for the component.
 * @returns {JSX.Element} A JSX element displaying the highlighted code.
 */
const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  // Create a reference to the <pre> element containing the code
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    // Highlight the code when the component mounts or when the code or language changes
    if (codeRef.current) {
      // Use Prism to highlight the referenced element's content
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]); // Dependencies array: re-run when `code` or `language` changes

  return (
    // The `language-${language}` class informs Prism of the code's language
    <pre className={`language-${language}`}>
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
