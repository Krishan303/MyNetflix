import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils.js/constants";
import { useEffect } from "react";
import { addTrendingMovies } from "../utils.js/movieSlice";

const useTrendingMovies = () => {
    const dispatch = useDispatch();

    const getTrendingMovies = async () => {
        const movies = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS);

        const moviesJson = await movies.json();
        dispatch(addTrendingMovies(moviesJson.results));
    }

    useEffect(()=> {
        getTrendingMovies();
    },[])
}

export default useTrendingMovies;