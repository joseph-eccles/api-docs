import { usePathname } from "next/navigation";

interface SidebarProps {
  logo?: React.ReactNode;
  menuItems: { label: string; href: string; target?: string }[];
  className?: string; // Accept className prop for additional styles
}

/**
 * Sidebar Component
 *
 * A responsive React component for a sidebar. It highlights the active menu item based on the current path,
 * taking into consideration the base path (e.g., /api-docs/). Supports links that open in a new tab/window.
 *
 * @param {SidebarProps} props - The properties for the Sidebar component.
 * @returns {JSX.Element} The rendered Sidebar component.
 */
const Sidebar: React.FC<SidebarProps> = ({ logo, menuItems, className }) => {
  const pathname = usePathname();

  const basePath = "/api-docs";

  // Function to normalize the pathname by removing the base path
  const normalizePathname = (path: string) => {
    if (path.startsWith(basePath)) {
      return path.slice(basePath.length) || "/"; // Return '/' if the result is an empty string
    }
    return path;
  };

  const currentPath = normalizePathname(pathname || "");

  return (
    <nav
      className={`bg-gray-800 text-white h-full w-64 flex flex-col ${className}`}
    >
      {/* Logo Section */}
      <div className="p-4 flex items-start justify-start">
        {logo ? (
          logo
        ) : (
          <span className="hidden md:block text-lg font-semibold">
            Bookshop API
          </span>
        )}
      </div>
      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2 p-4">
          {menuItems.map((item, index) => {
            const itemPath = normalizePathname(item.href);
            const isActive =
              currentPath === itemPath ||
              (itemPath === "/" && currentPath === "");

            return (
              <li key={index}>
                <a
                  href={item.href}
                  target={item.target} // Open in a new tab if target is "_blank"
                  rel={
                    item.target === "_blank" ? "noopener noreferrer" : undefined
                  } // Security measures for external links
                  className={`block p-2 rounded hover:bg-gray-700 transition-colors ${
                    isActive ? "bg-blue-500" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </nav>
  );
};

export default Sidebar;
