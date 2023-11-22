"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useSelector } from "react-redux";

import { selectIsAuthenticate } from "@/redux/selectors";
import { authLinks, unAuthLinks } from "../lib/constants/links";

const LinkList = ({ openNav }: { openNav?: () => void }) => {
  const path = usePathname();
  const isAuth = useSelector(selectIsAuthenticate);
  const links = isAuth ? authLinks : unAuthLinks;

  return (
    <ul className="w-full md:flex flex-row gap-[3.75rem]">
      {links.map((link) => (
        <li
          key={link.name}
          className="group py-7 border-b border-borders-primary md:border-none md:py-0"
        >
          <Link href={link.path} onClick={openNav} className="relative">
            {link.name}
            <span
              className={clsx(
                `hidden absolute bottom-0 left-0 w-full h-[1px] bg-btn-primary group-hover:block`,
                { block: link.path === path }
              )}
            ></span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
