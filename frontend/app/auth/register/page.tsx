import PublicRoute from "@/app/components/publicRoute";
import FormWrapper from "../form_wrapper";

const Page = () => {
  return (
    <PublicRoute>
      <FormWrapper isRegister />
    </PublicRoute>
  );
};

export default Page;
