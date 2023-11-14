import Link from "next/link";
import type { link } from "../lib/definitions";

const Nav = ({ links }: { links: link[] }) => {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
