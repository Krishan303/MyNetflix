import { useEffect } from "react";
import { API_OPTIONS } from "../utils.js/constants";
import { addUpcomingMovies } from "../utils.js/movieSlice";
import { useDispatch } from "react-redux";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies= async() => {
            const movies = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS)

            const moviesJson = await movies.json();
            console.log(moviesJson)
            dispatch(addUpcomingMovies(moviesJson.results))
        }

    useEffect(()=> {
        getUpcomingMovies();
    },[])
}

export default useUpcomingMovies;