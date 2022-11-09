import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (movie) => {
  const { title, id } = movie;
  return (
    <div>
        <Link to={`/movies/${id}`}>
            <h3>Title: {title}</h3>
        </Link>
        <hr />
    </div>
  );
};

export default MovieCard;
