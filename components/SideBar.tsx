import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface SidebarProps {
  logo?: React.ReactNode;
  menuItems: { label: string; href: string }[];
  className?: string; // Accept className prop for additional styles
}

/**
 * Sidebar Component
 *
 * A responsive React component for a sidebar. On mobile devices, the sidebar is hidden,
 * and it becomes visible on larger screens (e.g., md breakpoint). The sidebar is styled
 * with Tailwind CSS utility classes to be full-height, with a fixed width and dark background.
 * If a logo is provided, it will be displayed at the top of the sidebar.
 *
 * @param {SidebarProps} props - The properties for the Sidebar component.
 * @returns {JSX.Element} The rendered Sidebar component.
 */
const Sidebar: React.FC<SidebarProps> = ({ logo, menuItems, className }) => {
  const pathname = usePathname();

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
            API Docs
          </span>
        )}
      </div>
      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2 p-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`block p-2 rounded hover:bg-gray-700 transition-colors ${
                  pathname === item.href ? "bg-blue-500" : ""
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </nav>
  );
};

export default Sidebar;
