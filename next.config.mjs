import mdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
};

const withMDX = mdx({
  // Configure MDX options here
  extension: /\.mdx?$/,
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
