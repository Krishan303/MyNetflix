import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesList = useSelector((store) => store.movies);
  return (
    <div className=" bg-black full">
      <div className="-mt-20 md:-mt-36 z-20 relative pl-8">
        <div>
          <MovieList
            title={"Now Playing"}
            movies={moviesList.nowPlayingMovies}
          />
        </div>
        <div>
          <MovieList title={"Trending"} movies={moviesList.trendingMovies} />
        </div>
        <div>
          <MovieList title={"Popular"} movies={moviesList.popularMovies} />
        </div>
        <div>
          <MovieList title={"Upcoming"} movies={moviesList.upcomingMovies} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
