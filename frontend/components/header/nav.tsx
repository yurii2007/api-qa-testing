"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import LinkList from "./link_list";
import UserProfile from "./user";
import burger from "@/public/svg/burger_menu.svg";
import close from "@/public/svg/close.svg";

const Nav = ({ isOpenNav, toggleNav }: { isOpenNav: boolean; toggleNav: () => void }) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
      {isBigScreen ? null : <UserProfile />}
      <div
        onClick={toggleNav}
        className="pl-5 py-5 border-l border-l-borders-primary md:hidden"
      >
        <Image
          src={isOpenNav ? close : burger}
          alt="Navigation menu icon"
          className="w-[20px] h-[20px] cursor-pointer"
        />
      </div>
      <AnimatePresence>
        {isBigScreen ? (
          <nav className="header-text ml-auto mr-10 xl:mr-20">
            <LinkList toggleNav={toggleNav} />
          </nav>
        ) : isOpenNav ? (
          <motion.nav
            initial={{ y: "-100%", opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="header-text absolute top-[61px] left-0 w-screen bg-bg-primary h-[calc(100vh-61px)] items-start justify-center z-10"
          >
            <LinkList toggleNav={toggleNav} />
          </motion.nav>
        ) : null}
      </AnimatePresence>
      {isBigScreen ? <UserProfile /> : null}
    </>
  );
};

export default Nav;
