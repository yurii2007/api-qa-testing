"use client";

import type { AppDispatch } from "@/redux/store";
import Image from "next/image";

import { useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { updateAvatar } from "@/redux/userReducer/operation";

import closeIcon from "@/public/svg/close.svg";

const UpdateFrom = ({ closeForm }: { closeForm: () => void }) => {
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (ref.current?.files) {
      dispatch(updateAvatar(ref.current.files[0]))
        .unwrap()
        .then((res) => {
          toast.success(res.message);
          closeForm();
        })
        .catch((err) => toast.error(err));
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white py-4 px-3 flex flex-col gap-4 justify-center items-center rounded-md relative"
    >
      <button onClick={closeForm} type="button">
      <Image src={closeIcon} alt="Close form icon" width={16} height={16} className="absolute top-2 right-2" />
      </button>
      <label
        className="block mb-2 text-lg font-medium text-font-primary"
        htmlFor="file_input"
      >
        Upload file for new avatar
      </label>
      <input
        ref={ref}
        name="avatar"
        accept="image/png"
        required
        className="block w-[280px] text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        file:bg-slate-950 file:text-white
        hover:file:bg-slate-700 cursor-pointer"
        id="file_input"
        type="file"
      />
      <button
        className="primary-btn bg-slate-950 hover:bg-slate-700 rounded-lg py-3 text-white"
        type="submit"
      >
        Update
      </button>
    </form>
  );
};

export default UpdateFrom;
