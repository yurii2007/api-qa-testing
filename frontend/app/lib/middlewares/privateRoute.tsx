import { NextComponentType } from "next";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

import { selectIsAuth } from "../redux/selectors";

const privateRoute = (Component: NextComponentType) => {
  const Auth = (props: any) => {
    const isLoggedIn = useSelector(selectIsAuth);

    // redirect user to login page if he isn't logged in
    if (!isLoggedIn) {
      return redirect("/auth/login");
    }

    // is user is logged in, returning component
    return <Component {...props} />;
  };

  // copying props from passed component
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default privateRoute;
