"use client";

import Image from "next/image";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import type { AppDispatch } from "@/redux/store";

import { logout } from "@/redux/authReducer/operations";

import logoutIcon from "@/public/svg/sign_out.svg";

const SignOut = ({ toggleNav }: { toggleNav?: () => void }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogoutClick = () => {
    dispatch(logout())
      .unwrap()
      .finally(() => {
        toast.success("Successfully logged out!");
        if (toggleNav) toggleNav();
      });
  };

  return (
    <button
      onClick={handleLogoutClick}
      className="cursor-pointer py-7 border-l-0 md:pl-5 md:py-0 md:-my-5 md:h-[71px] xl:h-[80px] xl:-my-6 md:border-l border-l-borders-primary"
      type="button"
    >
      <Image src={logoutIcon} width={16} height={16} alt="logout icon" />
    </button>
  );
};

export default SignOut;
