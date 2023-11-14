import Header from "../ui/header";

import { unAuthLinks } from "../lib/links";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header links={unAuthLinks} />
      <div>
        <div>Layout auth</div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
