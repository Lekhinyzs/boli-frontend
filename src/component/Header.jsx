import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTheme } from "../contextapi/themeContext";
import { useSelector } from "react-redux";
import { signOut } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { darkMode, toggleDarkMode } = useTheme();

  const [open, setOpen] = useState(false);

  const [scrolling, setScrolling] = useState(false);

  const { pathname } = useLocation();

  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/signout");
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${darkMode && "dark"}`}>
      <div
        className={`py-1 z-99 ${
          scrolling
            ? "dark:md:bg-gray-900 md:bg-slate-50 dark:xxs:bg-gray-900 xxs:bg-slate-300 shadow-md "
            : "bg-transparent"
        } fixed w-full top-0 z-10`}
      >
        <div className="md:flex py-2 md:px-10 px-7 flex justify-between items-center ">
          <div>
            {darkMode ? (
              <Link to="/">
                <img
                  src="brand/grill logo1.svg"
                  alt="brand-name"
                  className="w-20 mt-2"
                />
              </Link>
            ) : (
              <Link to="/">
                <img
                  src="brand/grill logo2.svg"
                  alt="brand-name"
                  className="w-20 mt-2"
                />
              </Link>
            )}
          </div>
          <div></div>

          <div
            className="md:hidden w-16 h-8 bg-slate-400  rounded-full p-1 xxs:block relative right-14 "
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <>
                <div
                  className="absolute cursor-pointer bg-white w-6 h-6 rounded-full  transition-transform duration-500 pr-2 pt-4"
                  style={darkMode ? { left: "35px" } : { right: "35px" }}
                ></div>

                <FontAwesomeIcon
                  icon={faSun}
                  className="text-2xl text-yellow-500 "
                />
              </>
            ) : (
              <>
                <div className="absolute bg-white w-6 h-6 rounded-full  transition-transform duration-500 "></div>
                <FontAwesomeIcon
                  icon={faMoon}
                  className="text-2xl text-slate-700 pl-9 "
                />
              </>
            )}
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden "
          >
            <FontAwesomeIcon
              icon={open ? faClose : faBars}
              className="text-slate-600"
            />
          </div>
          <ul
            className={` md:flex md:items-center flex-row gap-6 items-center md:pb-0 pb-12 absolute md:sticky 
          md:z-auto z-1 left-0 right-0 top-[0] w-4/5 md:h-[50px] xxs:h-[800px] md:bg-transparent xxs:bg-nav  md:w-auto md:pl-0 pl-9  transition-all ease-in ${
            open ? "left-0" : "left-[-100%]"
          }`}
          >
            <li>
              <Link
                onClick={() => setOpen(!open)}
                to="/"
                className={`cursor-pointer md:text-slate-900 xxs:text-slate-200 xxs:text-center px-0 py-0 md:ml-8 md:my-0 my-7 dark:xxs:text-slate-200 dark:md:text-slate-400  dark:md:hover:text-white  relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[4px] after:bg-primary  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-start ${
                  pathname === "/" ? "border-b-4 border-primary" : "Home"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpen(!open)}
                to="/about"
                className={`cursor-pointer dark:xxs:text-slate-200 xxs:text-slate-200 dark:text-slate-600 text-slate-800 px-0 py-0 md:ml-8 md:my-0 my-7 dark:md:text-slate-400 md:text-slate-900 dark:hover:text-white relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[4px] after:bg-primary  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-start ${
                  pathname === "/about" ? "border-b-4 border-primary" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpen(!open)}
                to="/menu"
                className={`cursor-pointer dark:text-slate-600 dark:xxs:text-slate-200 px-0 py-0 md:ml-8 md:my-0 my-1 xxs:text-slate-200 dark:md:text-slate-400 md:text-slate-900 dark:hover:text-white relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[4px] after:bg-primary  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-start ${
                  pathname === "/menu" ? "border-b-4 border-primary" : ""
                }`}
              >
                Menu
              </Link>
            </li>
            <li>
              <div className="flex flex-row gap-5 ">
                <Link
                  onClick={() => setOpen(!open)}
                  to="/basket"
                  className={`cursor-pointer dark:xxs:text-slate-200 dark:text-slate-600 text-slate-800px-0 py-0 md:ml-8 md:my-0 my-7 xxs:text-slate-200 dark:md:text-slate-400 md:text-slate-900 dark:md:hover:text-white  relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[4px] after:bg-primary  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-start  ${
                    pathname === "/basket" ? "border-b-4 border-primary" : ""
                  }`}
                >
                  Orders
                </Link>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-5 ">
                <Link
                  onClick={() => setOpen(!open)}
                  to="/signup"
                  className={`cursor-pointer dark:xxs:text-slate-200 dark:text-slate-600 text-slate-800px-0 py-0 md:ml-8 md:my-0 my-1 xxs:text-slate-200 dark:md:text-slate-400 md:text-slate-900 dark:md:hover:text-white  relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[4px] after:bg-primary  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-start  ${
                    pathname === "/signup" ? "border-b-4 border-primary" : ""
                  }`}
                >
                  Sign Up
                </Link>
              </div>
            </li>
            <Link to="/profile">
              {currentUser ? (
                <div className="md:hidden xxs:flex flex-row gap-5 justify-start items-center">
                  <img
                    src={currentUser.profilePicture}
                    alt="profile"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <span
                    onClick={handleSignOut}
                    className=" cursor-pointer  dark:text-white  border-cyan-600 font-semibold rounded-lg text-slate-200  text-start "
                  >
                    Sign out
                  </span>
                </div>
              ) : (
                <div>
                  <li className=" xxs:block md:hidden px-5 py-3 bg-transparent border-2 border-cyan-600 font-semibold rounded-lg text-slate-200 dark:text-white text-center mr-3 my-7">
                    Log In
                  </li>
                </div>
              )}
            </Link>
            <div
              className="md:block w-16 h-8 bg-slate-400  rounded-full p-1 xxs:hidden relative "
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <>
                  <div
                    className="absolute cursor-pointer bg-white w-6 h-6 rounded-full transform transition-transform duration-1000 pr-2"
                    style={darkMode ? { left: "35px" } : { right: "35px" }}
                  ></div>
                  <FontAwesomeIcon
                    icon={faSun}
                    className="text-2xl text-yellow-500 "
                  />
                </>
              ) : (
                <>
                  <div className="absolute bg-white w-6 h-6 rounded-full transform transition-transform duration-1000"></div>
                  <FontAwesomeIcon
                    icon={faMoon}
                    className="text-2xl text-slate-700 pl-9 "
                  />
                </>
              )}
            </div>
          </ul>

          <Link to="/profile">
            {currentUser ? (
              <div className="md:flex xxs:hidden  flex-row gap-5 justify-center items-center ">
                <img
                  src={currentUser.profilePicture}
                  alt="profile"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <span
                  onClick={handleSignOut}
                  className=" cursor-pointer font-semibold text-slate-800 dark:text-white"
                >
                  Sign out
                </span>
              </div>
            ) : (
              <div>
                <li className=" xxs:hidden md:block px-5 py-3 bg-transparent hover:bg-cyan-600 border-2 border-cyan-600 font-semibold rounded-lg text-slate-800 dark:text-white hover:text-white">
                  Log In
                </li>
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
