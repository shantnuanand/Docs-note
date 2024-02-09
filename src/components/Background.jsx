import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed w-full h-screen"></div>
      <div className="absolute flex justify-center w-full py-10  text-zinc-600 text-xl top-[5%]">
        Documents.
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] font-semibold -translate-y-[50%] text-[13vw] leading-none tracking-tighter text-zinc-900">
        Docs.
      </h1>
     
    </>
  );
};

export default Background;
