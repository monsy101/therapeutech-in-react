"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Calendar, 
  User, 
  MessageCircle, 
  BookOpen, 
  Settings,
  Menu,
  X,
  Heart,
  Wind,
  Gamepad2,
  CheckSquare,
  Activity
} from 'lucide-react';
import clsx from 'clsx';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Dashboard', icon: Home },
    { href: '/sessions', label: 'Sessions', icon: Calendar },
    { href: '/chat', label: 'Chat', icon: MessageCircle },
    { href: '/breathing', label: 'Breathing', icon: Wind },
    { href: '/yoga', label: 'Yoga', icon: Activity },
    { href: '/games', label: 'Memory Games', icon: Gamepad2 },
    { href: '/tasks', label: 'Tasks', icon: CheckSquare },
    { href: '/resources', label: 'Resources', icon: BookOpen },
    { href: '/profile', label: 'Profile', icon: User },
    { href: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={clsx(
        "fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-4 border-b">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-[#91EEA5]" />
              <span className="text-xl font-bold text-[#14181B]">Therapa</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                    isActive
                      ? "bg-[#E0FFEA] text-[#91EEA5] border-r-2 border-[#91EEA5]"
                      : "text-[#57636C] hover:bg-gray-50 hover:text-[#14181B]"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* User info */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#E0FFEA] rounded-full flex items-center justify-center">
                <User size={16} className="text-[#91EEA5]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#14181B]">John Doe</p>
                <p className="text-xs text-[#57636C]">Premium Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
