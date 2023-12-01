"use client";

import { motion } from "framer-motion";

import AuthForm from "./authForm";
import GoogleBtn from "./google_btn";

const FormWrapper = ({ isRegister = false }) => {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0.6 }}
      animate={{ x: 0, opacity: 1, transition: { type: "tween" } }}
      className="shadow-main-shadow bg-white py-10 px-5 mt-6 md:px-8 md:pt-[4rem] md:pb-12 xl:mt-0"
    >
      <p
        className="text-[0.625rem] font-medium leading-3 tracking-normal text-left text-font-primary md:text-sm md:leading-4 
      md:tracking-normal"
      >
        You can use your Google Account to authorize:
      </p>
      <GoogleBtn />
      <p
        className="mt-8 text-[0.625rem] font-medium leading-3 tracking-wide text-left text-font-primary md:text-sm md:leading-4 
      md:tracking-normal"
      >
        Or {isRegister ? "register" : "login"} to our app using e-mail and password:
      </p>
      <AuthForm isRegister={isRegister} />
    </motion.div>
  );
};

export default FormWrapper;
