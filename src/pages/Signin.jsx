import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../component/OAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../contextapi/themeContext";
const Signin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });

  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = watch("email");
  const password = watch("password");

  const onSubmit = async () => {
    try {
      dispatch(signInStart());
      const res = await fetch("/server/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        dispatch(signInFailure(data.message));
        toast.error(data.message);
        return;
      }
      dispatch(signInSuccess(data));
      toast.success("Logged in");
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  const { darkMode } = useTheme();
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="dark:bg-slate-600 bg-white h-screen">
        <div className="flex flex-row justify-center items-center">
          <div className="bg-slate-300 dark:bg-gray-900 md:h-screen md:w-[50%] ">
            {darkMode ? (
              <img
                src="brand/grill logo1.svg"
                alt="brand-name"
                className="md:w-[90%] xxs:hidden md:block md:mt-60 md:pl-10 sm:pl-0 opacity-70 "
              />
            ) : (
              <img
                src="brand/grill logo2.svg"
                alt="brand-name"
                className="md:w-[90%] xxs:hidden md:block md:mt-60 md:pl-10 sm:pl-0 opacity-70 "
              />
            )}
          </div>
          <div className="p-3 mx-w-lg mx-auto md:w-2/5 xxs:w-full dark:bg-slate-600">
            <Link to="/">
              <h1 className="text-start text-lg text-slate-600 dark:text-white font-semibold mt-10">
                <FontAwesomeIcon
                  icon={faArrowCircleLeft}
                  className="text-yellow-500 pr-2"
                />
                Back to Home
              </h1>
            </Link>
            <h1 className="text-3xl text-center font-bold mt-32 my-10 text-slate-800 dark:text-white">
              Sign In
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-row gap-5 "></div>
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

              <button
                disabled={loading}
                className="bg-yellow-400 text-slate-600 font-semibold uppercase rounded-lg p-3 hover:opacity-80 duration-500 disabled:opacity-60"
              >
                {loading ? "Loading..." : "Sign In"}
              </button>
              <OAuth />
            </form>
            <div className="flex flex-row gap-3 mt-5 justify-between">
              <div>
                <h1 className="text-slate-800 dark:text-white">
                  Don't have an account?
                </h1>
                <Link to="/signUp">
                  <span className="text-cyan-500">Sign Up</span>
                </Link>
              </div>
              <div>
                <Link to="/">
                  <span className="text-cyan-500">Forgot Password</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
