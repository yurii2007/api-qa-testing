import Header from "../components/header";

import { unAuthLinks } from "../lib/constants/links";
import MainDesc from "./main_desc";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header links={unAuthLinks} />
      <main className="px-5 py-10 md:py-20 md:pb-[4.375rem] md:px-28 xl:flex xl:px-[7.5rem] xl:gap-28">
        <MainDesc />
        {children}
      </main>
    </>
  );
};

export default Layout;
