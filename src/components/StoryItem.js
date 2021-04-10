import React from "react";

const StoryItem = ({ itemId, title, body, created, imageUrl }) => {
  const date = created.split(/[- :]/);
  const [year, month, a, day, b] = date;

  return (
    <div className=" hover:opacity-50 cursor-pointer border m-1 grid grid-cols-1 font-mono w-44 h-64 md:w-52 md:h-80 rounded-md shadow overflow-hidden">
      <div className=" h-52 md:h-64  w-full border-black  ">
        <img className=" h-full w-full  " src={imageUrl} alt="image" />
      </div>
      <div className=" w-full p-2">
        <h1 className="font-bold text-justify text-base md:text-base ">
          {title}
        </h1>
        <h4 className="text-red-700 font-semibold text-sm leading-2">{`${year}-${month}-${day}`}</h4>
        {/* <p className=" text-base md:text-lg text-justify  ">{body}</p> */}
      </div>
    </div>
  );
};
// overflow-clip overflow-hidden
export default StoryItem;
