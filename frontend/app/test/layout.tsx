import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="py-7 px-5">{children}</main>;
};

export default layout;
