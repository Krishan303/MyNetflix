import React from "react";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils.js/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMoviesTrailer } from "../utils.js/movieSlice";

const VideoBackground = ({ id }) => {
  const trailerVideo = useSelector((store) => store.movies?.addTrailer);
  const dispatch = useDispatch();
  const movieDetails = async () => {
    const movie = await fetch(
      "https://api.themoviedb.org/3/movie/533535/videos?language=en-US",
      API_OPTIONS
    );
    const data = await movie.json();

    const trailer = data.results.find(
      (video) => video.name === "Official Trailer"
    );
    if (trailer) {
      dispatch(addMoviesTrailer(trailer));
    } else {
      console.warn("No official trailer found");
    }
  };

  useEffect(() => {
    movieDetails();
  }, []);

  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  );
};

export default VideoBackground;
