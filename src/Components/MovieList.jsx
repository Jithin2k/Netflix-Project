import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-6 py-3  text-white">
      <h1 className="text-2xl pl-12 font-semibold py-6">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-5">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
