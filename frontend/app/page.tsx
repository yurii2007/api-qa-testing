import Header from "./ui/header";

import { authLinks } from "./lib/links";

export default function Home() {
  return (
    <>
      <Header links={authLinks} />
      <main>
        <h1>app</h1>
      </main>
    </>
  );
}
