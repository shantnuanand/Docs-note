import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoClose } from "react-icons/io5";
// import { FaPlus } from "react-icons/fa6";

const Card = ({ data, reference }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
        className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
      >
        <FaFileAlt />
        {/* <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p> */}
        {/* <input className="bg-zinc-900/5 border-none text-sm leading-tight mt-5 font-semibold h-20"></input> */}
        <textarea cols={22} rows={5} maxlength={51} type="text" placeholder="Type your text here..." className="text-white bg-zinc-900/5 h-[100px] w-[180px] mt-5 p-2"></textarea>

        <div className="footer absolute bottom-0 w-full left-0 ">
          <div className="flex items-center justify-between py-3 px-8 mb-3">
            <h5>{data.filesize}</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoClose />
              ) : (
                <GoDownload size=".7em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4 ${
                data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"
              } flex items-center justify-center`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
              
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
