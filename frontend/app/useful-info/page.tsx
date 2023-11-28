import ProtectedRoute from "@/components/protectedRoute";
import Content from "./content";

const Page = () => {
  return (
    <ProtectedRoute>
      <main
        className="bg-useful-info-sm md:bg-useful-info-md xl:bg-useful-info-xl pt-10 md:pt-44 xl:pt-24
       md:pb-80 pb-[7.5rem] px-5 md:px-8 xl:pl-32 bg-no-repeat bg-cover"
      >
        <Content />
      </main>
    </ProtectedRoute>
  );
};

export default Page;
