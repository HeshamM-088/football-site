"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  House,
  Trophy,
  Calendar,
  Sun,
  Moon,
  ReceiptText,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: House },
  { name: "Matches", href: "/matches", icon: Calendar },
  { name: "Ranking", href: "/ranking", icon: ReceiptText },
  { name: "Championships", href: "/champions", icon: Trophy },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-subMainBg text-white"
      } shadow-lg transition-colors duration-200`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold">Korra2All</span>
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? darkMode
                        ? "bg-gray-900 text-white"
                        : "bg-[#E3651D] text-white"
                      : darkMode
                      ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                      : "text-subTextInLight hover:bg-[#cad4c3]"
                  } px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200 flex gap-1 items-center mr-4`}
                >
                  <item.icon className="w-5 h-5 ml-2 " />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-md ${
                darkMode
                  ? "text-yellow-300 hover:bg-gray-700"
                  : "text-yellow-100 hover:bg-[#cad4c3]"
              } focus:outline-none  focus:ring-white`}
            >
              <span className="sr-only">تبديل الوضع الليلي</span>
              {darkMode ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </button>
            <div className="mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md ${
                  darkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-700"
                    : "text-green-100 hover:text-white hover:bg-green-600"
                } focus:outline-none  focus:ring-white`}
              >
                <span className="sr-only">فتح القائمة الرئيسية</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? darkMode
                      ? "bg-gray-900 text-white"
                      : "bg-green-800 text-white"
                    : darkMode
                    ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                    : "text-green-100 hover:bg-green-600"
                } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center`}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5 ml-2" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
