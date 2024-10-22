import React from "react";

interface MainContentProps {
  /**
   * The content to be displayed within the main content area.
   * This can include any valid ReactNode, such as elements, components, or plain text.
   */
  children: React.ReactNode;
}

/**
 * MainContent Component
 *
 * A responsive React functional component that provides a container for the main content
 * of the application. It is designed to complement a sidebar and top bar layout. On mobile
 * devices, the main content is displayed below the top bar, while on larger screens it
 * occupies the space next to the sidebar.
 *
 * The component uses Tailwind CSS utility classes to make the content scrollable and
 * to add padding for better layout. When the sidebar is toggled, the main content adjusts
 * accordingly to ensure it remains fully accessible.
 *
 * @param {MainContentProps} props - The properties for the MainContent component.
 * @returns {JSX.Element} The rendered MainContent component.
 *
 * @example
 * ```tsx
 * import MainContent from './MainContent';
 *
 * export default function App() {
 *   return (
 *     <MainContent>
 *       <h1>Welcome to the Main Content Area</h1>
 *       <p>This section contains the main content of the page.</p>
 *     </MainContent>
 *   );
 * }
 * ```
 */
const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return <div className="flex-1 p-6 overflow-y-auto">{children}</div>;
};

export default MainContent;
