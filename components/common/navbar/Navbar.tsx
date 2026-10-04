import Link from "next/link";
import { House } from "lucide-react";

import { navItems } from "@/constants/navbar.constants";
import { ActiveLink } from "@/components";

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-900 py-3 px-6 justify-between m-3 rounded-lg">
      <Link href="/" className="flex gap-x-2 hover:text-blue-400 transition-colors">
        <House />
        <span>Home</span>
      </Link>
      <div className="flex gap-x-3">
        {navItems.map((navItem, idx) => (
          <ActiveLink key={idx} {...navItem} />
        ))}
      </div>
    </nav>
  );
};
