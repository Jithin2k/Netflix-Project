import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../Utils/constant";

const Browse = () => {
  const getNowPLayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    
  };

  useEffect(() => {
    getNowPLayingMovies();
  },[])

  return (
    <div>
      <Header />
      <h1>This is the browse page</h1>
    </div>
  );
};

export default Browse;
