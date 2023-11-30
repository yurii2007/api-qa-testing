"use client";

import type { AppDispatch } from "@/redux/store";

import { useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { updateAvatar } from "@/redux/userReducer/operation";

const UpdateFrom = () => {
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (ref.current?.files) {
      dispatch(updateAvatar(ref.current.files[0]))
        .unwrap()
        .then((res) => toast.success(res.message))
        .catch((err) => toast.error(err));
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input ref={ref} name="avatar" type="file" accept="image/png" required />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateFrom;
