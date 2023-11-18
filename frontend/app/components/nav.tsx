"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import type { link } from "../lib/constants/definitions";

const Nav = ({ links }: { links: link[] }) => {
  const path = usePathname();

  return (
    <nav className="hidden md:flex">
      <ul>
        {links.map((link) => (
          <li key={link.name} className="relative group">
            <Link
              href={link.path}
              className="font-medium text-sm leading-4 text-right tracking-wide"
            >
              {link.name}
            </Link>
            <span
              className={clsx(
                "hidden absolute bottom-0 w-full h-[1px] bg-btn-primary group-hover:block",
                { block: link.path === path }
              )}
            ></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
