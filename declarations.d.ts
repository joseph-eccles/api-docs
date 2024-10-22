/**
 * Declarations for `.mdx` file imports in a TypeScript project.
 *
 * This file allows TypeScript to recognize `.mdx` modules as valid imports.
 * It declares a module for files with the `.mdx` extension, treating them
 * as React functional components (`React.FC`). This enables the use of MDX
 * files directly in a Next.js project or any TypeScript-based React project
 * without type errors.
 *
 * The declaration makes `.mdx` files type-safe by specifying that they
 * can be treated as standard React components. By default, the component
 * type is defined as `React.FC`, which includes support for children.
 *
 * Usage:
 *
 * - Import `.mdx` files as components:
 *
 *   ```typescript
 *   import MyMdxComponent from './content/MyPage.mdx';
 *
 *   function App() {
 *     return <MyMdxComponent />;
 *   }
 *   ```
 *
 * - If additional props are needed, the `MDXProps` interface can be extended
 *   to add specific properties.
 *
 * Note:
 * This configuration helps avoid TypeScript errors related to importing
 * `.mdx` files and provides better integration of MDX with TypeScript.
 */

import React from "react";

declare module "*.mdx" {
  // Define the component type for an MDX component, which accepts standard React props
  let MDXComponent: React.FC;
  export default MDXComponent;
}
