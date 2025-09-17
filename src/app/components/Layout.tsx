"use client";

import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Navigation />
      <main className="flex-1 overflow-y-auto lg:ml-0">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
