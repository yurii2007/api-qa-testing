import ProtectedRoute from "@/components/protectedRoute";
import Content from "./content";

const Page = () => {
  return (
    <ProtectedRoute>
      <main className="bg-useful-info-sm md:bg-useful-info-md xl:bg-useful-info-xl pt-10 pb-[7.5rem] px-5 bg-no-repeat bg-cover">
        <Content />
      </main>
    </ProtectedRoute>
  );
};

export default Page;
