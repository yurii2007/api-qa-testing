import React from "react";
import Image from "next/image";

import editIcon from "@/public/svg/edit_button.svg";

const UserCard = ({
  userInfo,
  setEditing,
}: {
  userInfo: {
    username: string;
    email: string;
    avatar: string;
    avg: string;
    tests: string;
  };
  setEditing: () => void;
}) => {
  return (
    <div className="flex flex-col gap-1 md:gap-3 mx-auto w-[280px] md:w-[360px] xl:w-[420px] bg-white pb-1 md:pb-3 rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 py-4 md:py-6 md:bg-slate-200 relative">
        <Image
          src={userInfo.avatar}
          width={100}
          height={100}
          alt="User avatar"
          className="rounded-full"
        />
        <button
          onClick={setEditing}
          type="button"
          className="absolute left-[170px] md:left-[105px] xl:left-[100px] top-[96px] active:outline-none focus:outline-none md:bottom-0 w-[20px] h-[20px] cursor-pointer"
        >
          <Image src={editIcon} alt="Pencil icon" width={20} height={20} />
        </button>
        <div className="text-font-primary text-center md:text-left text-base md:text-lg xl:text-2xl font-medium">
          <p>{userInfo.username}</p>
          <p>{userInfo.email}</p>
        </div>
      </div>
      <div className="mx-2 p-2 md:p-4 rounded-xl bg-bg-footer text-white text-sm md:text-lg xl:text-xl text-center md:text-left">
        <p>
          Average score: <span className="font-semibold">{userInfo.avg}</span>
        </p>
        <p className="mt-1">
          Amount of tests: <span className="font-semibold">{userInfo.tests}</span>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
