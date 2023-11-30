import ProtectedRoute from "@/components/shared/protectedRoute";
import Profile from "./profile";

const Page = () => {
  return (
    <ProtectedRoute>
      <main className="px-5 pt-8 pb-60">
        <section>
          <Profile />
        </section>
      </main>
    </ProtectedRoute>
  );
};

export default Page;
