import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../Utils/constant";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../Utils/movieSlice";


const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();

    const getNowPLayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results))
    
  };

  useEffect(() => {
    getNowPLayingMovies();
  },[])
}

export default useNowPlayingMovies;