import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import OAuth from "../component/OAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../contextapi/themeContext";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const email = watch("email");
  const password = watch("password");
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/server/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        toast.error("email already exist");
        return;
      }
      toast.success("User created successfully");
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  const { darkMode } = useTheme();
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex flex-row justify-center items-center dark:bg-slate-600 bg-white h-screen ">
        <div className="p-3 mx-w-lg mx-auto md:w-2/5">
          <Link to="/">
            <h1 className="text-start text-lg text-slate-600 dark:text-white font-semibold">
              <FontAwesomeIcon
                icon={faArrowCircleLeft}
                className="text-yellow-500 pr-2"
              />
              Back to Home
            </h1>
          </Link>
          <h1 className="text-3xl text-center font-bold mt-32 my-10 text-slate-800 dark:text-slate-100">
            Sign Up
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-row gap-5 ">
              <div className="flex flex-col  w-[100%]">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  name="firstNamme"
                  id="firstName"
                  className="rounded-lg bg-slate-200 p-3 w-[100%]"
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "Required",
                    },
                    minLength: {
                      value: 3,
                      message: "Enter a valid name",
                    },
                    maxLength: {
                      value: 20,
                      message: "max length exceeded",
                    },
                    pattern: {
                      value: /[a-zA-Z]+/,
                      message: "Alphabets only",
                    },
                  })}
                />

                {errors.firstName && (
                  <span className="text-red-500 text-sm mt-2 ">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col  w-[100%] ">
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastNamme"
                  value={lastName}
                  id="lastName"
                  className="rounded-lg bg-slate-200 p-3 w-[100%]"
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "Required",
                    },
                    minLength: {
                      value: 3,
                      message: "Enter a valid name",
                    },
                    maxLength: {
                      value: 20,
                      message: "max length exceeded",
                    },
                    pattern: {
                      value: /[a-zA-Z]+/,
                      message: "Alphabets only",
                    },
                  })}
                />

                {errors.lastName && (
                  <span className="text-red-500 text-sm mt-2">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>
            <div className="w-[100%]">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                id="email"
                className="rounded-lg bg-slate-200 p-3 w-[100%]"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                  pattern: {
                    value:
                      /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
                    message: "invalid email address",
                  },
                })}
              />
              <div>
                {errors.email && (
                  <span className="text-red-500 text-sm mt-3">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                className="rounded-lg bg-slate-200 p-3 w-[100%]"
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,32}$/,
                    message:
                      "Must contain at least one uppercase letter and number",
                  },
                  minLength: {
                    value: 5,
                    message: "Password must have at least 5 characters",
                  },
                  maxLength: {
                    value: 15,
                    message: "Password must have at least 15 characters",
                  },
                })}
              />
              <div>
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                name="password"
                id="password"
                className="rounded-lg bg-slate-200 p-3 w-[100%]"
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              <div>
                {errors.confirmPassword && (
                  <span className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </div>
            <button
              disabled={loading}
              className="bg-yellow-400 text-slate-600 font-semibold uppercase rounded-lg p-3 hover:opacity-80 duration-500 disabled:opacity-60"
            >
              {loading ? "Loading..." : "Sign up"}
            </button>
            <OAuth />
          </form>
          <div className="flex flex-row gap-3 mt-5">
            <h1 className="text-slate-800 dark:text-white">
              Already have an account?
            </h1>
            <Link to="/signin">
              <span className="text-cyan-500">Sign In</span>
            </Link>
          </div>
        </div>
        <div className="bg-slate-300 dark:bg-gray-900 md:h-screen md:w-[50%] ">
          {darkMode ? (
            <img
              src="brand/grill logo1.svg"
              alt="brand-name"
              className="md:w-[90%] xxs:hidden md:block md:mt-60 md:pl-10 sm:pl-0 opacity-70"
            />
          ) : (
            <img
              src="brand/grill logo2.svg"
              alt="brand-name"
              className="md:w-[90%] xxs:hidden md:block md:mt-60 md:pl-10 sm:pl-0 opacity-70"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
