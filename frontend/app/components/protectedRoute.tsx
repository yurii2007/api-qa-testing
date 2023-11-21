"use client";

import { selectIsAuthenticate } from "@/redux/selectors";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = useSelector(selectIsAuthenticate);
  if (!isLoggedIn) redirect("/auth/login");
  return children;
};

export default ProtectedRoute;
