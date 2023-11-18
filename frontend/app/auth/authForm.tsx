"use client";

import { useFormik } from "formik";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { login, register } from "../lib/redux/authReducer/operations";
import { AppDispatch } from "../lib/redux/store";

interface SubmittedValues {
  email: string;
  password: string;
  username?: string;
}

interface Errors {
  email?: string;
  username?: string;
  password?: string;
}

const validate = (values: SubmittedValues) => {
  const errors: Errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!values.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    errors.email = "Please enter a valid email";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Must be at least 8 characters";
  }

  return errors;
};

const AuthForm = ({ isRegister = false }) => {
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: isRegister
      ? { email: "", password: "", username: "" }
      : { email: "", password: "" },
    validate,
    onSubmit: (values, { resetForm }) => {
      isRegister ? dispatch(register({ ...values })) : dispatch(login({ ...values }));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 mt-5 md:mt-8">
      {isRegister && (
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={formik.handleChange}
          value={formik.values.username}
          className="input-auth"
        />
      )}
      <input
        type="text"
        name="email"
        placeholder="E-mail"
        onChange={formik.handleChange}
        value={formik.values.email}
        className="input-auth"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
        className="input-auth"
      />
      <div className="flex flex-row justify-between xl:gap-4">
        <button
          type="submit"
          className="primary-btn bg-btn-primary text-white hover:bg-transparent border-transparent border hover:border-form-borders hover:text-font-primary"
        >
          {isRegister ? "sign up" : "sign in"}
        </button>
        <Link
          href={isRegister ? "/auth/login" : "/auth/register"}
          className="inline-block primary-btn bg-transparent border border-form-borders text-font-primary hover:bg-[#FF6B09]
           hover:text-white hover:border-transparent"
        >
          {isRegister ? "sign in" : "sign up"}
        </Link>
      </div>
    </form>
  );
};

export default AuthForm;