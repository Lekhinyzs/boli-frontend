import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faTiktok,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Order from "./Order";
import { Link } from "react-router-dom";
import { useTheme } from "../contextapi/themeContext";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // let greeting = "";
  // // if (hour < openHour) {
  // //   greeting = `We are yet to open 😔, pizza will be ready at 10am!`;
  // // } else if (hour >= openHour && hour <= closeHour) {
  // //   greeting = `Good Day 😎... We are currently open!`;
  // // } else {
  // //   greeting = `We are currently closed 😬!`;
  // // }

  const { darkMode } = useTheme();
  return (
    <footer className=" bg-slate-50 dark:bg-gray-800 text-center">
      <h2>
        {isOpen ? (
          <Order closeHour={closeHour} openHour={openHour} />
        ) : (
          <p className="dark:text-white text-slate-800">
            We are yet to open 😔, we are happy to welcome you between{" "}
            {openHour}:00hrs and {closeHour}:00hrs
          </p>
        )}
      </h2>
      <section className="bg-slate-100 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              {darkMode ? (
                <img
                  src="brand/grill logo1.svg"
                  alt=""
                  className="w-20 mx-auto mb-2"
                />
              ) : (
                <img
                  src="brand/grill logo2.svg"
                  alt=""
                  className="w-20 mx-auto mb-2"
                />
              )}
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    About
                  </a>
                </li>

                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Brand Center
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Help center
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Licensing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Download
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    iOS
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Android
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 bg-slate-400 dark:bg-gray-900 md:flex md:items-center md:justify-between md:pl-10 md:pr-10 h-28">
            <div className="flex mt-4 xxs:justify-center md:mt-0 space-x-5 rtl:space-x-reverse mb-2 ">
              <FontAwesomeIcon icon={faFacebook} className="text-white" />
              <FontAwesomeIcon icon={faTiktok} className="text-white" />
              <FontAwesomeIcon icon={faTwitter} className="text-white" />
              <FontAwesomeIcon icon={faInstagram} className="text-white" />
            </div>
            <span className="text-sm text-slate-100 dark:text-gray-300 xxs:text-center">
              © 2023 <Link href="/">Boli & Grills</Link>. All Rights Reserved.
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
