import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const navigate = useNavigate()
  const [movie, setMovie] = useState();
  const [editMovie, setEditMovie] = useState({})

  const fetchMovie = () => {
    axios
      .get(`/movies/${params.id}`)
      .then((response) => setMovie(response.data));
  };

  const handleChange = (event) =>{
    const newName = event.target.name
    const newValue = event.target.value
    setEditMovie({...editMovie,[newName]: newValue})
}

const handleEditMovie = (event, editMovie) =>{
  event.preventDefault()
  axios.put(`/movies/${params.id}`,editMovie)
    .then(response => fetchMovie())
    // fetch(`/movies/${params.id}`,{
    //   method: 'PUT',
    //   body:editMovie
    // })
}

const handleDeleteMovie = () =>{
  axios.delete(`/movies/${params.id}`)
  navigate("/movies")
}

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div>
      <h2>MovieDetails</h2>
      <Link to="/movies">
        <button>Go Back to movies</button>
      </Link>
      {movie ? (
        <>
          <h3>Title: {movie.title}</h3>
          <p>Director: {movie.director}</p>
          <p>Year: {movie.year}</p>
          <p>Color: {movie.color}</p>
          <p>Duration: {movie.duration}</p>
          <button type="button" onClick={handleDeleteMovie}>Delete this movie</button>
          <br/>
          <br/>

          <form onSubmit={(event)=>handleEditMovie(event, editMovie)} >
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                name="title"
                placeholder="title"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="director">Director:</label>
              <input
                type="text"
                name="director"
                placeholder="director"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="year">Year: </label>
              <input
                type="text"
                name="year"
                placeholder="year"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="color">Color: </label>
              <input
                type="text"
                name="color"
                placeholder="color"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="duration">Duration: </label>
              <input
                type="text"
                name="duration"
                placeholder="duration"
                onChange={handleChange}
              />
            </div>
            <br />
            <button type="submit">Update Movie Data</button>
          </form>
          {/* {movie.title==="The Dark Knight" ? <p>Color: {movie.color}</p>  : null} */}
        </>
      ) : null}
    </div>
  );
};

export default MovieDetails;
