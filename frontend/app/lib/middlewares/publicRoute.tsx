// import { NextComponentType } from "next";
// import { useSelector } from "react-redux";
// import { redirect } from "next/navigation";

// import { selectIsLoggedIn } from "@/redux/selectors";

// const publicRoute = (Component: NextComponentType) => {
//   const Auth = (props: any) => {
//     const isLoggedIn = useSelector(selectIsLoggedIn);

//     // redirect user to home page if he is logged in
//     if (isLoggedIn) {
//       return redirect("/");
//     }

//     // is user isn't logged in, returning component
//     return <Component {...props} />;
//   };

//   // copying props from passed component
//   if (Component.getInitialProps) {
//     Auth.getInitialProps = Component.getInitialProps;
//   }

//   return Auth;
// };

// export default publicRoute;
