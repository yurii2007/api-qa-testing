import PublicRoute from "@/components/shared/publicRoute";
import FormWrapper from "../form_wrapper";

const Page = () => {
  return (
    <PublicRoute>
      <FormWrapper isRegister />
    </PublicRoute>
  );
};

export default Page;
