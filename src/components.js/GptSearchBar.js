import React, { useRef } from "react";
import lang from "../utils.js/languageConstants";
import { useSelector } from "react-redux";
import openAi from "../utils.js/openAi";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  const getResults = useRef(null);

  const handleGptSearch = async () => {
    console.log(getResults.current.value);

    const chatCompletion = await openAi.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
    });

    console.log(chatCompletion);
    
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 p-2 m-2 bg-black"
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={getResults}
          className="p-4 m-2 ml-3 w-[80%]"
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button
          className="bg-red-600 p-4 w-[15%] rounded-lg text-white"
          onClick={handleGptSearch}>
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
