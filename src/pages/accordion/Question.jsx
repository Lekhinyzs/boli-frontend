import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Collapse } from "react-collapse";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowInfo(!showInfo)}
        className="px-5 py-5 pb-5 cursor-pointer dark:hover:text-blue-400 hover:text-green-500 duration-500"
      >
        <header className="flex flex-row justify-between ">
          <h4 className="md:text-xl xxs:text-md xxs:text-start font-normal pb-5">
            {title}
          </h4>
          <button className="flex ">
            {showInfo ? (
              <FontAwesomeIcon
                icon={faChevronUp}
                className="border rounded-full bg-slate-300 p-1"
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronDown}
                className="border rounded-full bg-slate-300 p-1"
              />
            )}
          </button>
        </header>
      </div>
      <div className="border-b-2 border-cyan-100 ">
        <Collapse isOpened={showInfo}>
          <p className="text-start pl-5 pb-10 font-light md:text-lg xxs:text-md pr-5 text-black dark:text-slate-50">
            {info}
          </p>
        </Collapse>
      </div>
    </>
  );
};

export default Question;
