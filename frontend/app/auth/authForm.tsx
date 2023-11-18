"use client"

import { useFormik } from "formik";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { login } from "../lib/redux/authReducer/operations";

interface SubmittedValues {
  email: string;
  password: string;
  username?: string;
}

const validate = (values: SubmittedValues) => {
  const errors = {
    email: "",
    password: "",
    username: "",
  };
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

const AuthForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate,
    onSubmit: (values, { resetForm }) => {
      const userData = {
        ...formik.values,
      };
      // dispatch(login(userData));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
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
      <div className="flex flex-row justify-between">
        <button
          type="submit"
          className="primary-btn bg-[#FF6B09] text-white hover:bg-transparent border-transparent border hover:border-form-borders hover:text-font-primary"
        >
          sign in
        </button>
        <Link
          href="/auth/register"
          className="inline-block primary-btn bg-transparent border border-form-borders text-font-primary hover:bg-[#FF6B09]
           hover:text-white hover:border-transparent"
        >
          sign up
        </Link>
      </div>
    </form>
  );
};

/*
const registerSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required(),
  password: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required(),
  password: Joi.string().required(),
});
*/

export default AuthForm;
