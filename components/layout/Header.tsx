"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/tulun", label: "图论教材" },
  { href: "/award", label: "获奖情况" },
  { href: "/services", label: "学术兼职" },
  { href: "/project", label: "科研项目" },
  { href: "/dissertation", label: "学术论文" },
  { href: "/teach", label: "教学工作" },
  { href: "/standard", label: "技术标准" },
  { href: "/resources", label: "相关资源" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Determine if we're on English version
  const isEnglish = pathname?.startsWith("/en");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm transition-shadow duration-200",
        isScrolled && "shadow-md"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/THU-S.jpg"
              alt="清华大学"
              width={38}
              height={38}
              className="rounded"
            />
            <span className="hidden font-serif text-lg font-semibold text-primary-900 sm:block">
              StarLab
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-100",
                  pathname === item.href
                    ? "bg-primary-50 text-primary-700"
                    : "text-secondary hover:bg-tertiary hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <div className="ml-2 flex items-center gap-1 border-l border-secondary-200 pl-2">
              <Link
                href={isEnglish ? "/" : "/en"}
                className={cn(
                  "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-100",
                  isEnglish
                    ? "bg-primary-50 text-primary-700"
                    : "text-secondary hover:bg-tertiary hover:text-primary"
                )}
              >
                <Globe className="h-4 w-4" />
                <span>{isEnglish ? "EN" : "中文"}</span>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2">
            {/* Mobile Language Toggle */}
            <Link
              href={isEnglish ? "/" : "/en"}
              className="flex items-center gap-1 rounded-md p-2 text-secondary hover:bg-tertiary lg:hidden"
            >
              <Globe className="h-5 w-5" />
            </Link>

            <button
              type="button"
              className="rounded-md p-2 text-secondary hover:bg-tertiary lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "关闭菜单" : "打开菜单"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white lg:hidden">
          <nav className="flex flex-col gap-1 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-4 py-3 text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary-50 text-primary-700"
                    : "text-secondary hover:bg-tertiary hover:text-primary"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
