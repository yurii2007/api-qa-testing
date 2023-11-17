import Header from "../components/header";

import { unAuthLinks } from "../lib/constants/links";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header links={unAuthLinks} />
      <main className="px-5 py-10">{children}</main>
    </>
  );
};

export default Layout;
