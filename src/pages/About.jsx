import Footer from "../component/Footer";
import Header from "../component/Header";
import Accordion from "./accordion/Accordion";
import Testimonial from "./Testimonial";
import { useTheme } from "../contextapi/themeContext";

const About = () => {
  const { darkMode } = useTheme();
  return (
    <div className={` ${darkMode && "dark"}`}>
      <div className="dark:bg-gray-900 bg-white ">
        <Header />
        <div className="pt-32 md:flex md:flex-row xxs:flex-col gap-5 items-center justify-center">
          <img
            src="images/Yamstew.JPG"
            alt="food"
            className="md:w-[40%] xxs:w-[100%] rounded-full xxs:p-5 md:pl-7"
          />
          <div className="text-center p-5">
            <h1 className="md:text-5xl xxs:text-3xl font-extrabold text-cyan-500">
              We cook the best street food
            </h1>
            <p className="md:text-3xl xxs:text-xl text-slate-400 mt-5">
              We cook the best meal in the entire city, <br />
              excellent customer service the best meal and the best price
            </p>
          </div>
        </div>
        <Testimonial />
        <Accordion />
        <Footer />
      </div>
    </div>
  );
};

export default About;
