"use client";

import { selectIsLoggedIn } from "@/redux/selectors";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuth = useSelector(selectIsLoggedIn);

  if (isAuth) redirect("/");

  return children;
};

export default PublicRoute;
