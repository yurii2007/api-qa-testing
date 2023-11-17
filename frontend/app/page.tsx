import React from "react";
import Header from "./components/header";

import { authLinks } from "./lib/constants/links";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header links={authLinks} />
      <main className="px-5 py-10">{children}</main>
    </>
  );
}
