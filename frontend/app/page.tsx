import React from "react";
import ProtectedRoute from "./components/protectedRoute";

import Quote from "./quote";
import HomeLinks from "./components/main_links";

export default function Home() {
  return (
    <ProtectedRoute>
      <main className="px-5 py-9 md:px-[3.75rem] md:py-20 xl:py-32">
        <Quote />
        <HomeLinks />
      </main>
    </ProtectedRoute>
  );
}
