"use client";

import Image from "next/image";

import GoogleLogo from "@/public/svg/google_logo.svg";

const GoogleBtn = () => {
  return (
    <form
      action="https://qa-testing-y6ws.onrender.com/api/auth/google"
      method="get"
      className="flex justify-center mt-8 md:justify-start"
    >
      <button
        className="py-4 px-9 text-center flex flex-row gap-[0.625rem] items-center justify-center bg-[#FAFAFA] capitalize text-font-primary
        text-sm font-bold leading-4 tracking-wide border border-opacity-0 border-btn-secondary shadow-btn-shadow 
        hover:border-opacity-100 focus:border-opacity-1 transition"
        type="submit"
      >
        <Image src={GoogleLogo} alt="Google Logo" className="w-[18px] h-[18px]" />
        google
      </button>
    </form>
  );
};

export default GoogleBtn;
