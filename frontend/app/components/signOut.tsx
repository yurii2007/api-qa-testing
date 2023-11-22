"use client";

import Image from "next/image";
import { useDispatch } from "react-redux";

import logoutIcon from "@/public/svg/sign_out.svg";
import { logout } from "@/redux/authReducer/operations";
import { AppDispatch } from "@/redux/store";

const SignOut = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <button
      onClick={() => dispatch(logout())}
      className="cursor-pointer py-7 border-l-0 md:pl-5 md:py-0 md:-my-5 md:h-[71px] xl:h-[80px] xl:-my-6 md:border-l border-l-borders-primary"
      type="button"
    >
      <Image src={logoutIcon} width={16} height={16} alt="logout icon" />
    </button>
  );
};

export default SignOut;
