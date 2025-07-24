import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";


const Browse = () => {

useNowPlayingMovies();
  

  return (
    <div>
      <Header />
      <h1>This is the browse page</h1>
    </div>
  );
};

export default Browse;
