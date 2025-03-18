import React from "react";
import { POSTER_URL } from "../utils.js/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div>
      <div className="w-56 m-2">
        <img alt="Now Playing Movies" src={POSTER_URL + posterPath}></img>
      </div>
    </div>
  );
};

export default MovieCard;
