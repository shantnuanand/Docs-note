import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa6";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eos explicabo praesentium?",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagcolor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eos explicabo praesentium?",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload Now", tagcolor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eos explicabo praesentium?",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagcolor: "green" },
    },
  ];

  return (
    <>
      <button className="w-7 h-7 bg-zinc-600 rounded-r-lg flex items-center justify-center">
        <FaPlus />
      </button>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
      >
        {data.map((item, index) => (
          <>
            <Card data={item} reference={ref} />
          </>
        ))}
      </div>
    </>
  );
};

export default Foreground;
