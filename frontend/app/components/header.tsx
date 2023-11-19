import Image from "next/image";

import Logo from "@/public/svg/logo.svg";
import Burger from "@/public/svg/burger_menu.svg";
import Nav from "./nav";

import { link } from "../lib/constants/definitions";

const Header = ({ links }: { links: link[] }) => {
  return (
    <header
      className="px-5 flex justify-between items-center border-b border-b-borders-primary
     md:px-8 xl:px-4 md:py-5 xl:py-6"
    >
      <div className="">
        <Image
          priority
          src={Logo}
          alt="Logo"
          className="w-[129px] h-[28px] cursor-pointer"
        />
      </div>
      <div className="pl-5 py-5 border-l border-l-borders-primary md:hidden">
        <Image
          src={Burger}
          alt="Navigation menu icon"
          className="w-[20px] h-[20px] cursor-pointer"
        />
      </div>
      <Nav links={links} />
    </header>
  );
};

export default Header;
