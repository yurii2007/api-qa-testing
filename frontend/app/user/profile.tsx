"use client";

import { useEffect, useState } from "react";
import { AppDispatch } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

import { selectUserInfo } from "@/redux/selectors";
import { getDetails } from "@/redux/userReducer/operation";

import UpdateFrom from "./updateForm";
import UserCard from "./userCard";

const Profile = () => {
  const [isUpdating, setUpdating] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const userInfo = useSelector(selectUserInfo);

  useEffect(() => {
    dispatch(getDetails());
  }, []);

  return (
    <>
      <UserCard
        userInfo={userInfo}
        setEditing={() => {
          setUpdating(true);
        }}
      />
      {isUpdating && <UpdateFrom />}
    </>
  );
};

export default Profile;
