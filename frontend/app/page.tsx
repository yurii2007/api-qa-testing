import React from "react";
import Header from "./components/header";
import ProtectedRoute from "./components/protectedRoute";

import { authLinks } from "./lib/constants/links";
import Quote from "./quote";
import HomeLinks from "./components/main_links";

export default function Home() {
  return (
    <ProtectedRoute>
      <Header links={authLinks} />
      <main className="px-5 py-9 md:px-[3.75rem] md:py-20 xl:py-32">
        <Quote />
        <HomeLinks />
      </main>
    </ProtectedRoute>
  );
}
