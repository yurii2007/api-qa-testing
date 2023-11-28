"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Logo from "@/public/svg/logo.svg";
import Nav from "./nav";

const Header = () => {
  const [isOpenNav, setOpenNav] = useState(false);

  return (
    <header
      className="px-5 flex justify-between items-center border-b border-b-borders-primary
     md:px-8 xl:px-4 md:py-5 xl:py-6"
    >
      <Link href="/" className="block">
        <Image
          priority
          src={Logo}
          alt="Logo"
          className="w-[129px] h-[28px] cursor-pointer"
        />
      </Link>
      <Nav isOpenNav={isOpenNav} openNav={setOpenNav} />
    </header>
  );
};

export default Header;