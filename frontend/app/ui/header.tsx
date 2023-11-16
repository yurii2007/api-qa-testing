"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link
              href="/auth/login"
              className={clsx({ "m-4": pathname === "/auth/login" })}
            >
              Login
            </Link>
          </li>
          <li>
            <Link href="/auth/register">Register</Link>
          </li>
          <li>
            <Link href="/test">Test</Link>
          </li>
          <li>
            <Link href="/useful-info">Useful info</Link>
          </li>
          <li>
            <Link href="/result">Result</Link>
          </li>
          <li>
            <Link href="/devs">Devs info</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
