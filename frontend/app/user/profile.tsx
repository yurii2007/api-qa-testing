"use client";

import { useEffect } from "react";
import { AppDispatch } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

import UpdateFrom from "./updateForm";
import { selectUserInfo } from "@/redux/selectors";
import { getDetails } from "@/redux/userReducer/operation";

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userInfo = useSelector(selectUserInfo);

  useEffect(() => {
    dispatch(getDetails());
  }, []);

  return (
    <div>
      <p>{userInfo.username}</p>
      <UpdateFrom />
    </div>
  );
};

export default Profile;
