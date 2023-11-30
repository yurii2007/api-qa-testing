"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { selectIsAuthenticate, selectUser } from "@/redux/selectors";

import SignOut from "./signOut";

const UserProfile = () => {
  const isAuth = useSelector(selectIsAuthenticate);
  const user = useSelector(selectUser);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767.9px)" });

  if (!isAuth) return null;

  return (
    <>
      <Link
        href="/user"
        className="block ml-auto mr-5 md:flex md:ml-0 items-center gap-2 cursor-pointer"
      >
        <Image
          src={user.avatarURL}
          width={30}
          height={30}
          alt="User Avatar"
          className="rounded-full"
        />
        {isSmallScreen ? null : (
          <span className="block header-text">{user.username}</span>
        )}
      </Link>
      {isSmallScreen ? null : <SignOut />}
    </>
  );
};

export default UserProfile;
