import React from "react";

import Header from "../components/header";
import { authLinks } from "../lib/constants/links";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header links={authLinks} />
      <main>{children}</main>
    </>
  );
};

export default layout;
