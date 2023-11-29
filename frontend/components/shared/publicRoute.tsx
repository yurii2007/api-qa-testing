"use client";

import { selectIsAuthenticate } from "@/redux/selectors";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuth = useSelector(selectIsAuthenticate);

  if (isAuth) redirect("/");

  return children;
};

export default PublicRoute;
