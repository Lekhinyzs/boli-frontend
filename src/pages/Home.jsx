import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faBellConcierge,
  faBowlRice,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../component/Header";
import Menu from "../component/Item";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import { useTheme } from "../contextapi/themeContext";
import { useSelector } from "react-redux";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { darkMode } = useTheme();
  return (
    <div className={`${darkMode && "dark"}`}>
      <Header />
      <div className="w-full mx-auto ">
        <div className=" bg-slate-200 dark:bg-slate-900  md:flex xxs:block xxs:pt-32 md:pt-32  flex-row gap-5 justify-center items-center pb-5">
          <img
            src="images/bolifish.JPG"
            alt="pizza-image"
            className="rounded-full md:w-[40%] xxs:w-[100%] md:shadow-sm xxs:shadow-lg p-4 mb-16 "
          />

          <div className="flex flex-col gap-5 justify-center items-center xxs:p-7 md:pl-0 ">
            <h1 className="md:text-5xl xxs:text-4xl font-bold text-slate-600 xxs:mt-2 text-center">
              Serving <span className="text-cyan-700">Street Meal </span>At Its
              Best
            </h1>
            <p className="text-3xl xxs:text-xl font-bold text-slate-600 text-center">
              All from our stone oven, all organic, all delicous.
            </p>
            <div className="xxs:flex flex-row gap-5 md:w-[50%] mx-auto xxs:w-[100%] justify-center mt-10">
              <div>
                <Link
                  to="/about"
                  className="p-5 border-2 border-yellow-500 bg-transparent bg-yellow-500 hover:opacity-95 w-[100%] rounded-lg text-slate-600 font-bold text-center hover:bg-yellow-500 duration-500 hover:text-white "
                >
                  <button>Learn more</button>
                </Link>
              </div>

              <div>
                {currentUser ? (
                  <Link
                    to="/basket"
                    className="md:px-10 md:py-5 xxs:px-10 xxs:py-5 bg-transparent border-2 border-yellow-500 hover:opacity-95 w-[100%] rounded-lg text-slate-700 dark:text-white font-bold text-center hover:bg-yellow-500  hover:text-white"
                  >
                    <button>Order</button>
                  </Link>
                ) : (
                  <Link
                    to="/signup"
                    className="md:px-10 md:py-5 xxs:px-10 xxs:py-5 bg-transparent border-2 border-yellow-500 hover:opacity-95 w-[100%] rounded-lg text-slate-700 dark:text-white font-bold text-center hover:bg-yellow-500  hover:text-white"
                  >
                    <button>Order</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <section className=" h-12 md:h-32 bg-white dark:bg-slate-800">
          <div className=" md:max-w-[1200px]  xxs:-translate-y-0 md:-translate-y-16  md:p-2 xxs:block md:grid grid-cols-4  mx-auto pt-5 dark:bg-slate-800 bg-white rounded-xl">
            <div className="flex flex-col items-center justify-center mb-5">
              <FontAwesomeIcon
                icon={faTruck}
                className="text-5xl text-yellow-600 pb-1"
              />
              <h1 className="text-sm font-bold dark:text-white text-primary sm:text-lg">
                Fast Delivery
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center mb-5 ">
              <FontAwesomeIcon
                icon={faBowlRice}
                className="text-5xl text-yellow-600 pb-1"
              />
              <h1 className="text-sm font-bold dark:text-white text-primary sm:text-lg">
                Tasty Meal
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center mb-5 ">
              <FontAwesomeIcon
                icon={faAward}
                className="text-5xl text-yellow-600 pb-1"
              />
              <h1 className="text-sm font-bold dark:text-white text-primary sm:text-lg">
                Excellent Food
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center mb-5 ">
              <FontAwesomeIcon
                icon={faBellConcierge}
                className="text-5xl text-yellow-600 pb-1"
              />
              <h1 className="text-sm font-bold dark:text-white text-primary sm:text-lg">
                Exceptional assistance
              </h1>
            </div>
          </div>
        </section>
        <div className="xxs:pt-96 md:pt-6 mx-w-lg mx-auto md:text-start xxs:text-center bg-white dark:bg-slate-800">
          <div className="w-3/4 mx-auto md:flex xxs:block flex-row justify-between items-center p-2">
            <div>
              <p className="text-lg text-slate-400 font-medium">Check out</p>
              <h1 className="text-3xl font-extrabold text-cyan-500 mb-5">
                OUR BEST SELLOUT
              </h1>
            </div>
            <div>
              <Link to="/menu">
                <button className="px-5 py-2 bg-transparent border-2 rounded-lg border-yellow-500 mb-2 text-slate-800 dark:text-white">
                  See all
                </button>
              </Link>
            </div>
          </div>
          <Menu />
          <section className="text-center mt-20">
            <div className="flex flex-wrap justify-around items-center ">
              <div>
                <p className="text-slate-800 dark:text-white">How it works</p>
                <h1 className="text-5xl text-yellow-500 font-extrabold">
                  Steps 1-2-3-4
                </h1>
              </div>

              <div className="mb-5">
                <img
                  src="brand/grill logo2.svg"
                  alt="image-logo"
                  className="w-32 relative top-36 left-20 opacity-80"
                />
                <img
                  src="images/phone1.png"
                  alt=""
                  className="w-[260px] h-[500px]"
                />
              </div>
            </div>
            <div className="grid grid-flow-col grid-rows-2 gap-5 w-3/4 mx-auto py-10">
              <div className="py-10 px-15 bg-slate-200 hover:bg-yellow-500 rounded-lg">
                <p>Step-1</p>
                <span>Select a meal from the menu</span>
              </div>
              <div className="py-10 px-15 bg-slate-200 hover:bg-cyan-500 rounded-lg">
                <p>Step-2</p>
                <span>Click on the meal</span>
              </div>
              <div className="py-10 px-15 bg-slate-200 hover:bg-purple-500 rounded-lg">
                <p>Step-3</p>
                <span>Confirm your selected meal</span>
              </div>
              <div className="py-10 px-15 bg-slate-200 hover:bg-rose-500 rounded-lg">
                <p>Step-4</p>
                <span>Proceed with the payment</span>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
