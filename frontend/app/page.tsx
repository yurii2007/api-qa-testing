import React from "react";
import Header from "./components/header";

import { authLinks } from "./lib/constants/links";
import Quote from "./quote";
import HomeLinks from "./main_links";

export default function Home() {
  return (
    <>
      <Header links={authLinks} />
      <main className="px-5 py-9 md:px-[3.75rem] md:py-20 xl:py-32">
        <Quote />
        <HomeLinks />
      </main>
    </>
  );
}
