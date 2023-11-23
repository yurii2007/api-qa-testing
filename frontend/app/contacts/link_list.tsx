import Image from "next/image";
import { socialLinks } from "@/constants/links";
import Link from "next/link";

const LinkList = () => {
  return (
    <ul className="flex mt-3 px-3 justify-start gap-4">
      {socialLinks.map((link) => (
        <li key={link.alt} className="group cursor-pointer">
          <Link href={link.link} className="group-hover:scale-110 block transition-transform w-[30px] h-[30px]">
            <Image src={link.src} alt={link.alt} className="w-full h-full" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
