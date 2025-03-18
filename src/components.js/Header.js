import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowGpt } from "../utils.js/gptSlice";
import { changeLanguage } from "../utils.js/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const gptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleGptSearchClick = () => {
    dispatch(toggleShowGpt());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-full p-4 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-32"
      />
      <div className="flex items-center">
        {gptSearch && <select
          className="p-2 bg-slate-400 m-2 rounded-md cursor-pointer"
          onChange={handleLangChange}>
          <option value="en">English</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option>
        </select>
}
        <button
          className="p-4 bg-purple-700 text-white rounded-lg"
          onClick={handleGptSearchClick}>
          {gptSearch ? "Homepage" : "Gpt search"}
        </button>
      </div>
    </div>
  );
};

export default Header;
