import React from "react";
import Header from "./components/header";

import { authLinks } from "./lib/constants/links";

export default function Home() {
  return (
    <>
      <Header links={authLinks} />
      <main className="px-5 py-10"></main>
    </>
  );
}
