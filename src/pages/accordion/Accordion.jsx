import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import data2 from "../../assets/DATA/data2";
import SingleQuestion from "./Question";
function Accordion() {
  const [questions, setQuestions] = useState(data2);
  console.log(setQuestions);
  return (
    <main>
      <div className=" dark:bg-gray-900 bg-white text-center dark:text-gray-100 text-slate-900  xxs:mb-20 mb:mb-0 pt-10 md:flex xxs:block flex-row justify-center items-center  ">
        <div>
          <h3 className="md:text-3xl xxs:text-xl pb-8 xxs:pl-0 font-semibold pl-5">
            Got questions? Checkout our FAQs
          </h3>
          <div className=" container md:hidden xxs:block md:w-[50%] xxs:w-[90%] mx-auto border  dark:bg-gray-800 bg-white dark:border-none shadow-xl my-10">
            {questions.map((question) => {
              return (
                <SingleQuestion
                  key={question.id}
                  {...question}
                ></SingleQuestion>
              );
            })}
          </div>
          <p className="md:text-xl xxs:text-base md:pl-10 xxs:pl-0">
            Still have unanswered questions and need to get in touch?
          </p>
          <div className="flex flex-row gap-5 m-10">
            <div className="px-5 py-5 border rounded-xl text-start border-cyan-200">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                className="text-3xl text-blue-500"
              />
              <p className="mt-5">Still have question?</p>
              <Link to="/contact" className=" text-blue-500">
                Call us
              </Link>
            </div>
            <div className="px-5 py-5 border rounded-xl text-start border-cyan-200">
              <FontAwesomeIcon
                icon={faComments}
                className="text-3xl text-green-400"
              />
              <p className="mt-5">Still have question?</p>
              <Link to="/contact" className=" text-green-500 ">
                Chat with us
              </Link>
            </div>
          </div>
        </div>
        <div className=" container xxs:hidden md:block md:w-[50%] xxs:w-[90%] mx-auto border  dark:bg-gray-800 bg-white dark:border-none shadow-xl ">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Accordion;
