"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { selectIsAuthenticate, selectUser } from "@/redux/selectors";
import { useMediaQuery } from "react-responsive";
import SignOut from "./signOut";

const UserProfile = () => {
  const isAuth = useSelector(selectIsAuthenticate);
  const user = useSelector(selectUser);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767.9px)" });

  if (!isAuth) return null;

  return (
    <>
      <div className="ml-auto mr-5 md:flex md:ml-0 items-center gap-2">
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
      </div>
      {isSmallScreen ? null : <SignOut />}
    </>
  );
};

export default UserProfile;
