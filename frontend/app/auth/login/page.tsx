"use client";

import AuthForm from "../authForm";

const Page = () => {
  return (
    <>
      <form action="https://qa-testing-y6ws.onrender.com/api/auth/google" method="get">
        <button type="submit">google</button>
      </form>

      <AuthForm />
    </>
  );
};

export default Page;
