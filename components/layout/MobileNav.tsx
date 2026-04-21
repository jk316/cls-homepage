"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  BookOpen,
  Trophy,
  Users,
  FolderKanban,
  FileText,
  GraduationCap,
  Globe,
  Link2,
} from "lucide-react";

const mobileNavItems = [
  { href: "/", label: "首页", icon: Home },
  { href: "/tulun", label: "教材", icon: BookOpen },
  { href: "/award", label: "获奖", icon: Trophy },
  { href: "/dissertation", label: "论文", icon: FileText },
  { href: "/teach", label: "教学", icon: GraduationCap },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-secondary-200 bg-white pb-safe pb-2 pt-2 lg:hidden">
      <div className="flex items-center justify-around">
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2 text-xs transition-colors",
                isActive
                  ? "text-primary-600"
                  : "text-secondary hover:text-primary-600"
              )}
            >
              <Icon className={cn("h-5 w-5", isActive && "text-primary-600")} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
