import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { useTheme } from "../contextapi/themeContext";
const Contact = () => {
  const { darkMode } = useTheme();
  return (
    <div className={`${darkMode && "dark"}`}>
      <Header />
      <section className="bg-white dark:bg-gray-900 pt-20  ">
        <div className="py-8 lg:py-16 px-4 mx-auto">
          <h2 className="mb-4 text-2xl tracking-tight text-center text-gray-600 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Need details about our services? Want to send feedback about a
            better feature? Got a technical issue? Let us know.
          </p>
          <div className="flex flex-row gap-6 justify-center items-center xxs:block md:flex xxs:border-2 md:border-0 dark:border-slate-800 border-slate-400 rounded-xl shadow-md">
            <div className=" xxs:hidden md:block text-center pb-10">
              <div className="flex flex-row gap-5 justify-center items-center">
                <div className="px-5 py-5 border rounded-xl text-start border-cyan-200 shadow-lg dark:text-white">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-xl text-green-600"
                  />
                  <p>+2347068077717</p>
                  <p>+2347068077717</p>
                </div>
                <div className="px-5 py-5 border rounded-xl text-start border-cyan-200 shadow-lg dark:text-white">
                  <FontAwesomeIcon
                    icon={faMailBulk}
                    className="text-xl text-green-600"
                  />
                  <p>boli&grill@gmail.com</p>
                  <p>hello@boli&grill.com</p>
                </div>
              </div>
            </div>
            <form
              action="#"
              className="space-y-10 dark:bg-slate-900  p-8 rounded-xl md:w-1/2 xxs:w-full border-l-2"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@lekinees.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-slate-100  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-slate-100  rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="shadow-md bg-cyan-500 duration-500 hover:opacity-80 text-slate-50 font-bold py-3 px-4  rounded "
              >
                Send message
              </button>
            </form>
          </div>
        </div>
        <div className=" xxs:block md:hidden text-center pb-10">
          <div className="flex flex-row gap-5 justify-center items-center">
            <div className="px-5 py-5 border rounded-xl text-start border-cyan-200 shadow-lg dark:text-white">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-xl text-green-600"
              />
              <p>+2347068077717</p>
              <p>+2347068077717</p>
            </div>
            <div className="px-5 py-5 border rounded-xl text-start border-cyan-200 shadow-lg dark:text-white">
              <FontAwesomeIcon
                icon={faMailBulk}
                className="text-xl text-cyan-500"
              />
              <p>boli&grill@gmail.com</p>
              <p>hello@boli&grill.com</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
