"use client";

import { useDispatch } from "react-redux";
import { register } from "@/app/lib/redux/authReducer/operations";

const Page = () => {
  const dispatch = useDispatch();
  const click = () => {
    dispatch(register({ email: "next@js.13", username: "zalupa_1993", password: "13" }));
  };

  return (
    <div>
      <button onClick={click}>login</button>
    </div>
  );
};

export default Page;
