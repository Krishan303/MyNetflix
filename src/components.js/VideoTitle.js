import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[10%] md:pt-[15%] pl-14 absolute bg-gradient-to-r from-black w-full aspect-video">
      <h1 className="pb-3 md:pb-0 md:pt-0 text-xl md:text-3xl font-bold px-4 text-white">{title}</h1>
      <p className="hidden md:block text-l w-1/3 p-4 text-white">{overview}</p>
      <button className="bg-white px-3 md:px-8 py-1 md:py-4 text-lg mx-2 font-bold rounded-lg hover:bg-opacity-70">
        Play
      </button>
      <button className="bg-gray-400 px-3 md:px-8 py-1 md:py-4 text-lg font-bold rounded-lg bg-opacity-50">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
